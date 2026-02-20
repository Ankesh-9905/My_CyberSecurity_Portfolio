"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowDown, FolderOpen, Mail, Download } from "lucide-react"
import ThreeBackground from "./ThreeBackground"

export function HeroSection() {
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
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* 3D Background */}
      <ThreeBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">

          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">

            <p className="mb-4 font-mono text-sm tracking-widest text-primary animate-slide-left">
              {'> WELCOME TO MY PORTFOLIO'}
            </p>

            <h1 className="mb-4 text-4xl font-bold leading-tight text-foreground animate-slide-up sm:text-5xl lg:text-6xl">
              {"Hi, I'm "}
              <span className="neon-text text-primary">
                Ankesh Kumar Yadav
              </span>
            </h1>

            <p className="mb-6 text-lg font-medium text-muted-foreground sm:text-xl">
              Cybersecurity Professional | SOC Analyst Aspirant
            </p>

            <p className="mx-auto mb-8 max-w-lg leading-relaxed text-muted-foreground lg:mx-0">
              Passionate about defending digital assets and hunting threats.
              Dedicated to building a career in Security Operations with
              hands-on experience in network security, vulnerability assessment,
              and incident response.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">

              <a
                href="/Ankesh_Kumar_Yadav_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg border border-primary/40 px-7 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary/10"
              >
                <FolderOpen className="h-4 w-4" />
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-primary/40 px-7 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary/10"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>

            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex-shrink-0">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80">
              <div className="absolute -inset-1 rounded-full bg-primary/20 blur-xl" />
              <div className="neon-border relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/images/profile.jpg"
                  alt="Ankesh Kumar Yadav - Cybersecurity Professional"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center lg:mt-24">
          <a
            href="#objective"
            className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="font-mono text-xs tracking-widest">
              SCROLL DOWN
            </span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  )
}