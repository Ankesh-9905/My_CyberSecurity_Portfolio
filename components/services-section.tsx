"use client"

import { useEffect, useRef } from "react"
import { ShieldCheck, Activity, Search, Network } from "lucide-react"

const services = [
  {
    icon: Activity,
    title: "Security Monitoring",
    description:
      "Monitor security events and alerts using SIEM tools like Splunk. Analyze logs to detect suspicious activities and potential security incidents.",
  },
  {
    icon: Search,
    title: "Log Analysis & Threat Detection",
    description:
      "Analyze system and network logs to identify anomalies, brute-force attempts, and indicators of compromise (IOCs) using event correlation techniques.",
  },
  {
    icon: Network,
    title: "Network Traffic Analysis",
    description:
      "Capture and inspect network traffic using Wireshark to identify malicious patterns, suspicious DNS queries, and abnormal HTTP activity.",
  },
  {
    icon: ShieldCheck,
    title: "Incident Response (Basics)",
    description:
      "Support basic incident response by investigating alerts, understanding attack techniques using MITRE ATT&CK, and assisting in threat containment.",
  },
]

export function ServicesSection() {
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
    <section id="services" ref={sectionRef} className="relative py-20 lg:py-28">
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            data-animate
            className="mb-3 text-3xl font-bold text-foreground opacity-0 sm:text-4xl"
          >
            What I Can <span className="text-primary">Do</span>
          </h2>
          <div
            data-animate
            className="mx-auto h-1 w-16 rounded-full bg-primary opacity-0"
            style={{ animationDelay: "0.1s" }}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              data-animate
              className="group relative overflow-hidden rounded-xl border border-border bg-card/50 p-6 opacity-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
              style={{ animationDelay: `${0.15 * (i + 1)}s` }}
            >
              <div className="absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_rgba(0,255,136,0.15)]">
                <service.icon className="h-6 w-6" />
              </div>

              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}