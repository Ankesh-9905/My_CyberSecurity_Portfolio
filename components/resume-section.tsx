"use client"

import { useEffect, useRef } from "react"
import { FileText, Download, Eye } from "lucide-react"

export function ResumeSection() {
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
    <section
      id="resume"
      ref={sectionRef}
      className="relative py-20 lg:py-28 "
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <h2
            data-animate
            className="mb-4 text-3xl font-bold text-foreground opacity-0 sm:text-4xl"
          >
            My <span className="neon-text">Resume</span>
          </h2>
          <p
            data-animate
            className="mx-auto max-w-xl text-muted-foreground opacity-0"
            style={{ animationDelay: "0.1s" }}
          >
            Explore my professional journey, certifications, skills, and hands-on
            cybersecurity experience.
          </p>
        </div>

        {/* Resume Card */}
        <div
          data-animate
          className="relative rounded-2xl border border-primary/20 bg-card/70 p-10 shadow-xl opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 neon-border">
            <FileText className="h-10 w-10 text-primary" />
          </div>

          <h3 className="mb-4 text-xl font-semibold text-foreground">
            Ankesh Kumar Yadav
          </h3>

          <p className="mb-8 text-muted-foreground">
            SOC Analyst Aspirant | Cybersecurity Enthusiast | Ethical Hacking Certified
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            {/* View */}
            <a
              href="/Ankesh_Kumar_Yadav_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <Eye className="h-4 w-4" />
              View Resume
            </a>

            {/* Download */}
            <a
              href="/Ankesh_Kumar_Yadav_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-primary px-7 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}