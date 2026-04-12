"use client"

import { useEffect, useRef } from "react"
import { ExternalLink } from "lucide-react"

const platforms = [
  {
    name: "Splunk (SIEM Practice)",
    description:
      "Worked on log analysis, dashboard creation, and alert generation to detect brute-force attacks and suspicious activities.",
    stat: "SIEM Logs & Alerts",
    url: "#",
  },
  {
    name: "Wireshark (Traffic Analysis)",
    description:
      "Captured and analyzed network packets to investigate DNS queries, HTTP traffic, and identify indicators of compromise (IOCs).",
    stat: "Packet Analysis",
    url: "#",
  },
  {
    name: "Nmap (Scanning & Enumeration)",
    description:
      "Performed network scanning to identify open ports, services, and basic vulnerabilities using Nmap in a controlled lab environment.",
    stat: "Port Scanning",
    url: "#",
  },
  {
    name: "Microsoft Sentinel (Learning)",
    description:
      "Currently learning cloud-based SIEM, KQL queries, and threat detection techniques for modern SOC environments.",
    stat: "Cloud SIEM",
    url: "#",
  },
]

export function LabsSection() {
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
            Practical <span className="text-primary">Experience</span>
          </h2>
          <div
            data-animate
            className="mx-auto h-1 w-16 rounded-full bg-primary opacity-0"
            style={{ animationDelay: "0.1s" }}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((platform, i) => (
            <div
              key={platform.name}
              data-animate
              className="group flex flex-col rounded-xl border border-border bg-card/50 p-6 opacity-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
              style={{ animationDelay: `${0.15 * (i + 1)}s` }}
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold text-foreground">
                  {platform.name}
                </h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              <span className="mb-3 inline-block w-fit rounded-md border border-primary/20 bg-primary/5 px-2.5 py-0.5 font-mono text-xs text-primary">
                {platform.stat}
              </span>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {platform.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}