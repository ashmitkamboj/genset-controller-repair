import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  controllerType?: unknown;
  message?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxRequestBodyBytes = 16 * 1024;
const rateLimitWindowMs = 15 * 60 * 1000;
const maxRequestsPerWindow = 5;
const requestCounts = new Map<string, { count: number; windowStartedAt: number }>();

function getClientAddress(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0].trim()
    || request.headers.get("x-real-ip")
    || "unknown";
}

function isRateLimited(clientAddress: string, now: number) {
  const existing = requestCounts.get(clientAddress);

  if (!existing || now - existing.windowStartedAt >= rateLimitWindowMs) {
    requestCounts.set(clientAddress, { count: 1, windowStartedAt: now });
    return false;
  }

  existing.count += 1;
  return existing.count > maxRequestsPerWindow;
}

function removeExpiredRateLimits(now: number) {
  for (const [clientAddress, entry] of requestCounts) {
    if (now - entry.windowStartedAt >= rateLimitWindowMs) {
      requestCounts.delete(clientAddress);
    }
  }
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character,
  );
}

export async function POST(request: Request) {
  try {
    const allowedOrigin = process.env.ALLOWED_ORIGIN;
    const requestOrigin = request.headers.get("origin");

    if (!allowedOrigin) {
      console.error("ALLOWED_ORIGIN is not configured.");
      return NextResponse.json(
        { success: false, message: "The enquiry service is temporarily unavailable." },
        { status: 503 },
      );
    }

    if (requestOrigin !== allowedOrigin) {
      return NextResponse.json(
        { success: false, message: "Forbidden." },
        { status: 403 },
      );
    }

    const now = Date.now();
    removeExpiredRateLimits(now);

    if (isRateLimited(getClientAddress(request), now)) {
      return NextResponse.json(
        { success: false, message: "Too many enquiries. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(Math.ceil(rateLimitWindowMs / 1000)) },
        },
      );
    }

    if (!request.headers.get("content-type")?.includes("application/json")) {
      return NextResponse.json(
        { success: false, message: "Requests must use JSON." },
        { status: 415 },
      );
    }

    const contentLength = request.headers.get("content-length");
    if (contentLength && Number(contentLength) > maxRequestBodyBytes) {
      return NextResponse.json(
        { success: false, message: "Request body is too large." },
        { status: 413 },
      );
    }

    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > maxRequestBodyBytes) {
      return NextResponse.json(
        { success: false, message: "Request body is too large." },
        { status: 413 },
      );
    }

    const parsedBody: unknown = JSON.parse(rawBody);
    if (typeof parsedBody !== "object" || parsedBody === null || Array.isArray(parsedBody)) {
      return NextResponse.json(
        { success: false, message: "Request body must be a JSON object." },
        { status: 400 },
      );
    }

    const body = parsedBody as ContactPayload;
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const controllerType = typeof body.controllerType === "string" ? body.controllerType.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !phone || !email || !controllerType || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    if (name.length > 100 || phone.length > 30 || email.length > 254 || controllerType.length > 100 || message.length > 5000) {
      return NextResponse.json(
        { success: false, message: "One or more fields are too long." },
        { status: 400 },
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!resendApiKey || !contactEmail) {
      console.error("Contact email configuration is incomplete.");
      return NextResponse.json(
        { success: false, message: "The enquiry service is temporarily unavailable." },
        { status: 503 },
      );
    }

    const resend = new Resend(resendApiKey);
    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeControllerType = escapeHtml(controllerType);
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");

    const { error } = await resend.emails.send({
      from: "Website Enquiry <ashmitkamboj@gmail.com>",
      to: contactEmail,
      replyTo: email,
      subject: `New ${controllerType} Repair Enquiry`.slice(0, 200),
      html: `
        <h2>New Website Enquiry</h2>

        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Controller Type:</strong> ${safeControllerType}</p>

        <h3>Message</h3>
        <p>${safeMessage}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send enquiry. Please try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, message: "Invalid JSON request." },
        { status: 400 },
      );
    }

    console.error("Contact API error:", error instanceof Error ? error.message : "Unknown error");

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}