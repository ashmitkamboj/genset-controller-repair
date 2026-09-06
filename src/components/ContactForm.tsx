"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setIsSubmitting(true);
		setSubmitted(false);
		setErrorMessage("");

		const form = event.currentTarget;
		const formData = new FormData(form);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(Object.fromEntries(formData.entries())),
			});
			const result = (await response.json()) as { success?: boolean; message?: string };

			if (!response.ok || !result.success) {
				throw new Error(result.message || "Unable to send enquiry.");
			}

			setSubmitted(true);
			form.reset();
		} catch (error) {
			setErrorMessage(error instanceof Error ? error.message : "Unable to send enquiry. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<form
			className="grid gap-5"
			onSubmit={handleSubmit}
			aria-describedby={submitted ? "contact-form-success" : undefined}
		>
			<div className="grid gap-5 sm:grid-cols-2">
				<label className="grid gap-2 text-sm font-semibold text-[var(--foreground)]">
					Name
					<input
						className="min-h-12 rounded-md border border-[var(--line)] bg-white/70 px-4 text-base font-normal outline-none transition placeholder:text-[var(--ink-muted)]/70 focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/20"
						name="name"
						placeholder="Your name"
						required
						type="text"
					/>
				</label>
				<label className="grid gap-2 text-sm font-semibold text-[var(--foreground)]">
					Phone
					<input
						className="min-h-12 rounded-md border border-[var(--line)] bg-white/70 px-4 text-base font-normal outline-none transition placeholder:text-[var(--ink-muted)]/70 focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/20"
						name="phone"
						placeholder="+91"
						required
						type="tel"
					/>
				</label>
			</div>

			<div className="grid gap-5 sm:grid-cols-2">
				<label className="grid gap-2 text-sm font-semibold text-[var(--foreground)]">
					Email
					<input
						className="min-h-12 rounded-md border border-[var(--line)] bg-white/70 px-4 text-base font-normal outline-none transition placeholder:text-[var(--ink-muted)]/70 focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/20"
						name="email"
						placeholder="you@example.com"
						required
						type="email"
					/>
				</label>
				<label className="grid gap-2 text-sm font-semibold text-[var(--foreground)]">
					Controller type
					<input
						className="min-h-12 rounded-md border border-[var(--line)] bg-white/70 px-4 text-base font-normal outline-none transition focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/20"
						name="controllerType"
						placeholder="Enter controller type or model"
						required
						type="text"
					/>
				</label>
			</div>

			<label className="grid gap-2 text-sm font-semibold text-[var(--foreground)]">
				How can we help?
				<textarea
					className="min-h-32 resize-y rounded-md border border-[var(--line)] bg-white/70 px-4 py-3 text-base font-normal outline-none transition placeholder:text-[var(--ink-muted)]/70 focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/20"
					name="message"
					placeholder="Tell us about your controller or repair requirement"
					required
				/>
			</label>

			<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<button
					className="min-h-12 w-full rounded-md bg-[var(--teal)] px-6 text-base font-bold text-white transition hover:bg-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--teal)] focus:ring-offset-2 disabled:cursor-wait disabled:opacity-60 sm:w-auto"
					type="submit"
					disabled={isSubmitting}
				>
					{isSubmitting ? "Sending..." : "Send message"}
				</button>
				{submitted && (
					<p className="text-sm font-semibold text-[var(--teal)]" id="contact-form-success" role="status">
						Thank you. We&apos;ll review your enquiry shortly.
					</p>
				)}
				{errorMessage && (
					<p className="text-sm font-semibold text-red-700" role="alert">{errorMessage}</p>
				)}
			</div>
		</form>
	);
}
