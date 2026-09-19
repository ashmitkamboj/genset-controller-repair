"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type Attachment = {
	filename: string;
	content: string; // Base64
};

export function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

	function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
		const files = event.target.files;
		if (!files) return;

		setErrorMessage("");
		const newFiles = Array.from(files);

		// Check count limit
		if (selectedFiles.length + newFiles.length > 5) {
			setErrorMessage("You can attach a maximum of 5 photos.");
			return;
		}

		// Check size limit (max 5MB per file)
		for (const file of newFiles) {
			if (file.size > 5 * 1024 * 1024) {
				setErrorMessage(`"${file.name}" is larger than 5MB.`);
				return;
			}
		}

		setSelectedFiles((prev) => [...prev, ...newFiles]);
		event.target.value = ""; // Reset input
	}

	function removeFile(indexToRemove: number) {
		setSelectedFiles((prev) => prev.filter((_, idx) => idx !== indexToRemove));
	}

	async function fileToBase64(file: File): Promise<Attachment> {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => {
				const result = reader.result as string;
				// Extract base64 part after comma
				const base64Content = result.split(",")[1] || "";
				resolve({
					filename: file.name,
					content: base64Content,
				});
			};
			reader.onerror = (error) => reject(error);
			reader.readAsDataURL(file);
		});
	}

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setIsSubmitting(true);
		setSubmitted(false);
		setErrorMessage("");

		const form = event.currentTarget;
		const formData = new FormData(form);

		try {
			// Convert files to base64 attachments
			const attachments = await Promise.all(selectedFiles.map(fileToBase64));

			const payload = {
				name: formData.get("name"),
				phone: formData.get("phone"),
				email: formData.get("email"),
				controllerType: formData.get("controllerType"),
				message: formData.get("message"),
				attachments: attachments.length > 0 ? attachments : undefined,
			};

			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});

			const result = (await response.json()) as { success?: boolean; message?: string };

			if (!response.ok || !result.success) {
				throw new Error(result.message || "Unable to send enquiry.");
			}

			setSubmitted(true);
			setSelectedFiles([]);
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

			{/* Controller Image Attachment Section */}
			<div className="grid gap-2">
				<span className="text-sm font-semibold text-[var(--foreground)]">
					Attach Controller Photos <span className="font-normal text-[var(--ink-muted)]">(Optional, up to 5 photos)</span>
				</span>
				<div className="relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-[var(--line)] bg-white/60 p-4 text-center transition hover:border-[var(--teal)] hover:bg-white focus-within:ring-2 focus-within:ring-[var(--teal)]/20">
					<input
						type="file"
						accept="image/*"
						multiple
						className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
						onChange={handleFileChange}
						disabled={isSubmitting || selectedFiles.length >= 5}
					/>
					<div className="flex flex-col items-center gap-1">
						<span className="text-2xl">📷</span>
						<span className="text-sm font-medium text-[var(--foreground)]">
							{selectedFiles.length >= 5
								? "Maximum 5 photos selected"
								: "Click or drag photos here to attach"}
						</span>
						<span className="text-xs text-[var(--ink-muted)]">
							Supports JPG, PNG, WEBP (Max 5MB per photo)
						</span>
					</div>
				</div>

				{/* Selected Files List */}
				{selectedFiles.length > 0 && (
					<div className="flex flex-wrap gap-2 mt-1">
						{selectedFiles.map((file, idx) => (
							<div
								key={idx}
								className="flex items-center gap-2 rounded-md border border-[var(--teal)]/30 bg-[var(--teal)]/10 px-3 py-1.5 text-xs font-semibold text-[var(--teal)] shadow-sm"
							>
								<span className="truncate max-w-[180px]">{file.name}</span>
								<span className="text-[10px] opacity-75">({(file.size / 1024).toFixed(0)}KB)</span>
								<button
									type="button"
									onClick={() => removeFile(idx)}
									className="ml-1 text-red-600 hover:text-red-800 font-bold focus:outline-none"
									title="Remove photo"
								>
									✕
								</button>
							</div>
						))}
					</div>
				)}
			</div>

			<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mt-1">
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

