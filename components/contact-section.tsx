"use client"

import { useState, type FormEvent } from "react"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"

type Errors = {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Errors>({})

  const validate = (formData: FormData) => {
    const newErrors: Errors = {}

    const name = formData.get("name")?.toString().trim() || ""
    const email = formData.get("email")?.toString().trim() || ""
    const phone = formData.get("phone")?.toString().trim() || ""
    const message = formData.get("message")?.toString().trim() || ""

    // Name validation
    if (!name) {
      newErrors.name = "Name is required"
    } else if (name.length < 3) {
      newErrors.name = "Name must be at least 3 characters"
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name = "Name should contain only letters"
    }

    // Email validation
    if (!email) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address"
    }

    // Phone validation
    if (!phone) {
      newErrors.phone = "Mobile number is required"
    } else if (!/^[0-9]{10,15}$/.test(phone)) {
      newErrors.phone = "Enter valid 10–15 digit mobile number"
    }

    // Message validation
    if (!message) {
      newErrors.message = "Message is required"
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    return newErrors
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const validationErrors = validate(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setStatus("sending")

    try {
      const res = await fetch("https://formspree.io/f/mzdaawjj", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (res.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Contact <span className="text-primary">Me</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-xl border border-border bg-card/50 p-6"
          noValidate
        >
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full rounded-lg border border-border px-4 py-2.5"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full rounded-lg border border-border px-4 py-2.5"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              className="w-full rounded-lg border border-border px-4 py-2.5"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              className="w-full resize-none rounded-lg border border-border px-4 py-2.5"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground"
          >
            {status === "sending" ? (
              "Sending..."
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </button>

          {status === "success" && (
            <div className="flex items-center gap-2 text-green-500">
              <CheckCircle2 className="h-4 w-4" />
              Message sent successfully!
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center gap-2 text-red-500">
              <AlertCircle className="h-4 w-4" />
              Something went wrong. Try again.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}