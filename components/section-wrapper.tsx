"use client"

import { useEffect, useRef } from "react"

interface SectionWrapperProps {
  id: string
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

export function SectionWrapper({ id, title, subtitle, children, className = "" }: SectionWrapperProps) {
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
    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id={id} ref={sectionRef} className={`py-20 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        {title && (
          <div className="reveal opacity-0 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {title.split(" ").map((word, i) => (
                <span key={i}>
                  {i === title.split(" ").length - 1 ? (
                    <span className="text-primary">{word}</span>
                  ) : (
                    <>{word} </>
                  )}
                </span>
              ))}
            </h2>
            {subtitle && (
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="mt-4 mx-auto w-20 h-0.5 bg-primary/50" />
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
