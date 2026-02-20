"use client"

import { useEffect, useRef } from "react"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Network Traffic Analyzer",
    tools: ["Python", "Scapy", "Wireshark"],
    description:
      "Built a Python-based network packet analyzer that captures and inspects live traffic, identifies suspicious patterns, and generates alerts for potential intrusions.",
    github: "#",
  },
  {
    title: "Vulnerability Scanner",
    tools: ["Python", "Nmap", "Bash"],
    description:
      "Developed an automated vulnerability scanning tool that integrates Nmap scans with custom Python scripts to identify open ports, services, and known CVEs.",
    github: "#",
  },
  {
    title: "SIEM Dashboard",
    tools: ["Splunk", "Python", "Regex"],
    description:
      "Created custom Splunk dashboards and correlation rules to monitor security events, detect anomalies, and streamline incident response workflows.",
    github: "#",
  },
  {
    title: "Web App Pentesting Lab",
    tools: ["Burp Suite", "OWASP ZAP", "Kali Linux"],
    description:
      "Set up a local pentesting environment to practice web application security testing, documenting findings for OWASP Top 10 vulnerabilities.",
    github: "#",
  },
]

export function ProjectsSection() {
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
    <section id="projects" ref={sectionRef} className="relative py-20 lg:py-28">
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            data-animate
            className="mb-3 text-3xl font-bold text-foreground opacity-0 sm:text-4xl"
          >
            My <span className="text-primary">Projects</span>
          </h2>
          <div
            data-animate
            className="mx-auto h-1 w-16 rounded-full bg-primary opacity-0"
            style={{ animationDelay: "0.1s" }}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.title}
              data-animate
              className="group flex flex-col justify-between rounded-xl border border-border bg-card/50 p-6 opacity-0 transition-all duration-300 hover:border-primary/40 hover:bg-card"
              style={{ animationDelay: `${0.15 * (i + 1)}s` }}
            >
              <div>
                <div className="mb-3 flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <div className="h-2 w-2 flex-shrink-0 rounded-full bg-primary opacity-50 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-0.5 font-mono text-xs text-primary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
