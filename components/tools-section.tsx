"use client"

import { useEffect, useRef, useState } from "react"

const tools = [
  { name: "Linux", level: 85 },
  { name: "Networking", level: 80 },
  { name: "Nmap", level: 75 },
  { name: "Wireshark", level: 78 },
  { name: "Burp Suite", level: 70 },
  { name: "Python", level: 72 },
]

function getLevelLabel(level: number) {
  if (level >= 85) return "Excellent"
  if (level >= 75) return "Very Good"
  return "Good"
}

function ProgressBar({ name, level }: { name: string; level: number }) {
  const [width, setWidth] = useState(0)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setWidth(level), 200)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (barRef.current) observer.observe(barRef.current)
    return () => observer.disconnect()
  }, [level])

  return (
    <div ref={barRef} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-semibold text-primary">
          {getLevelLabel(level)}
        </span>
      </div>

      <div className="h-2.5 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary/80 to-primary transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            boxShadow: width > 0 ? "0 0 8px rgba(0,255,136,0.4)" : "none",
          }}
        />
      </div>
    </div>
  )
}

export function ToolsSection() {
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

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            data-animate
            className="mb-3 text-3xl font-bold text-foreground opacity-0 sm:text-4xl"
          >
            Tools <span className="text-primary">Proficiency</span>
          </h2>
          <div
            data-animate
            className="mx-auto h-1 w-16 rounded-full bg-primary opacity-0"
            style={{ animationDelay: "0.1s" }}
          />
        </div>

        <div
          data-animate
          className="space-y-6 rounded-xl border border-border bg-card/50 p-6 opacity-0 sm:p-8"
          style={{ animationDelay: "0.2s" }}
        >
          {tools.map((tool) => (
            <ProgressBar key={tool.name} name={tool.name} level={tool.level} />
          ))}
        </div>
      </div>
    </section>
  )
}