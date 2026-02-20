"use client"

import { useEffect, useRef } from "react"
import { Network, MonitorCog, Wrench, Code2, Cloud } from "lucide-react"

const skillCategories = [
  {
    icon: Network,
    title: "Networking",
    skills: ["TCP/IP", "DNS", "DHCP", "Firewalls", "VPN", "Subnetting", "OSI Model"],
  },
  {
    icon: MonitorCog,
    title: "Operating Systems",
    skills: ["Linux (Ubuntu, Kali)", "Windows Server", "Command Line", "System Administration"],
  },
  {
    icon: Wrench,
    title: "Security Tools",
    skills: ["Nmap", "Wireshark", "Metasploit", "Burp Suite", "Splunk", "Snort"],
  },
  {
    icon: Code2,
    title: "Programming",
    skills: ["Python", "Bash Scripting", "SQL", "Regular Expressions"],
  },
  {
    icon: Cloud,
    title: "Cloud & Other",
    skills: ["AWS Basics", "Docker Fundamentals", "Git & GitHub", "OWASP Top 10"],
  },
]

export function SkillsSection() {
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
    <section id="skills" ref={sectionRef} className="relative py-20 lg:py-28">
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            data-animate
            className="mb-3 text-3xl font-bold text-foreground opacity-0 sm:text-4xl"
          >
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div
            data-animate
            className="mx-auto h-1 w-16 rounded-full bg-primary opacity-0"
            style={{ animationDelay: "0.1s" }}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              data-animate
              className="group rounded-xl border border-border bg-card/50 p-6 opacity-0 transition-all hover:border-primary/40 hover:bg-card"
              style={{ animationDelay: `${0.15 * (i + 1)}s` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <cat.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-secondary-foreground transition-colors group-hover:border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
