"use client"

import { useEffect, useRef } from "react"
import { Award, ExternalLink } from "lucide-react"

const certifications = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    year: "2025",
    verifyUrl: "#",
  },
  {
    name: "Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    year: "2025",
    verifyUrl: "#",
  },
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google / Coursera",
    year: "2024",
    verifyUrl: "#",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2024",
    verifyUrl: "#",
  },
  {
    name: "Ethical Hacking (Elite)",
    issuer: "NPTEL (IIT KHARAGPUR)",
    year: "2025",
    verifyUrl: "#", // add your actual certificate link here
  },
]

export function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll("[data-animate]")
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="certifications" ref={sectionRef} className="relative py-20 lg:py-28">
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            data-animate
            className="mb-3 text-3xl font-bold text-foreground opacity-0 sm:text-4xl"
          >
            My <span className="text-primary">Certifications</span>
          </h2>
          <div
            data-animate
            className="mx-auto h-1 w-16 rounded-full bg-primary opacity-0"
            style={{ animationDelay: "0.1s" }}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <div
              key={cert.name}
              data-animate
              className="group flex items-start gap-4 rounded-xl border border-border bg-card/50 p-6 opacity-0 transition-all hover:border-primary/40 hover:bg-card"
              style={{ animationDelay: `${0.15 * (i + 1)}s` }}
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Award className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 font-semibold text-foreground">
                  {cert.name}
                </h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  {cert.issuer} &middot; {cert.year}
                </p>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Verify
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
