"use client"

import { useEffect, useRef } from "react"
import { BookOpen, Network, FlaskConical, ScanEye, Clock } from "lucide-react"

const reasons = [
  {
    icon: BookOpen,
    title: "Passionate Learner",
    description: "Constantly exploring new cybersecurity concepts, tools, and techniques through self-study and online platforms.",
  },
  {
    icon: Network,
    title: "Strong Networking Foundation",
    description: "Solid understanding of TCP/IP, DNS, firewalls, and network protocols that form the backbone of security operations.",
  },
  {
    icon: FlaskConical,
    title: "Practical Lab Experience",
    description: "Hands-on skills developed through TryHackMe, HackTheBox, and personal home lab environments.",
  },
  {
    icon: ScanEye,
    title: "Detail-Oriented Mindset",
    description: "Meticulous approach to analyzing logs, identifying anomalies, and documenting security findings.",
  },
  {
    icon: Clock,
    title: "24/7 Learning Attitude",
    description: "Dedicated to staying current with the ever-evolving threat landscape and security best practices.",
  },
]

export function WhyChooseSection() {
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
    <section ref={sectionRef} className="relative py-20 lg:py-28">
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            data-animate
            className="mb-3 text-3xl font-bold text-foreground opacity-0 sm:text-4xl"
          >
            Why <span className="text-primary">Choose Me</span>
          </h2>
          <div
            data-animate
            className="mx-auto h-1 w-16 rounded-full bg-primary opacity-0"
            style={{ animationDelay: "0.1s" }}
          />
        </div>

        <div className="mx-auto grid max-w-4xl gap-4">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              data-animate
              className="group flex items-start gap-4 rounded-xl border border-border bg-card/50 p-5 opacity-0 transition-all hover:border-primary/40 hover:bg-card"
              style={{ animationDelay: `${0.12 * (i + 1)}s` }}
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <reason.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
