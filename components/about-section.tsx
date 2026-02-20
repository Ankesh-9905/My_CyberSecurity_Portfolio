"use client"

import { useEffect, useRef } from "react"
import { Shield, Search, Globe, Monitor } from "lucide-react"

const highlights = [
  { icon: Shield, label: "Network Security" },
  { icon: Search, label: "Vulnerability Assessment" },
  { icon: Globe, label: "Web Application Security" },
  { icon: Monitor, label: "Security Monitoring" },
]

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="relative py-20 lg:py-28">
      {/* Section divider line */}
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            data-animate
            className="mb-3 text-3xl font-bold text-foreground opacity-0 sm:text-4xl"
          >
            Know Me <span className="text-primary">More</span>
          </h2>
          <div
            data-animate
            className="mx-auto h-1 w-16 rounded-full bg-primary opacity-0"
            style={{ animationDelay: "0.1s" }}
          />
        </div>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Description */}
          <div
            data-animate
            className="flex-1 space-y-5 opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="leading-relaxed text-muted-foreground">
              I am a passionate cybersecurity enthusiast with a strong drive to
              protect organizations from evolving cyber threats. My journey into
              cybersecurity started with a deep curiosity about how systems work
              and how they can be defended.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Through extensive hands-on lab experience on platforms like
              TryHackMe and HackTheBox, I have developed practical skills in
              network analysis, threat detection, and vulnerability management. I
              believe in continuous learning and staying up to date with the
              latest security trends and attack vectors.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              My goal is to contribute to a SOC team where I can apply my skills
              in real-world scenarios, defend critical infrastructure, and grow as
              a cybersecurity professional.
            </p>
          </div>

          {/* Highlight cards */}
          <div
            data-animate
            className="grid w-full max-w-md grid-cols-2 gap-4 opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card/50 p-6 text-center transition-all hover:border-primary/40 hover:bg-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <item.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
