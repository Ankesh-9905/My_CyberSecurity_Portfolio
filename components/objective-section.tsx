"use client"

import { useEffect, useRef } from "react"
import { Target } from "lucide-react"

export function ObjectiveSection() {
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
      { threshold: 0.2 }
    )
    const elements = sectionRef.current?.querySelectorAll("[data-animate]")
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="objective"
      ref={sectionRef}
      className="relative py-20 lg:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div
          data-animate
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-primary opacity-0"
        >
          <Target className="h-3.5 w-3.5" />
          CAREER OBJECTIVE
        </div>
        <p
          data-animate
          className="text-pretty text-lg leading-relaxed text-muted-foreground opacity-0 sm:text-xl"
          style={{ animationDelay: "0.2s" }}
        >
          To obtain a challenging position as a{" "}
          <span className="font-semibold text-foreground">SOC Analyst</span> where
          I can leverage my knowledge of network security, threat detection, and
          incident response to protect organizations from cyber threats. Committed
          to continuous learning and professional development in{" "}
          <span className="font-semibold text-foreground">defensive security</span>{" "}
          operations, with a focus on real-time security monitoring and proactive
          threat hunting.
        </p>
      </div>
    </section>
  )
}
