"use client"

import { useEffect, useRef } from "react"
import { Award, ExternalLink } from "lucide-react"

const certifications = [

   {
    name: " SOC Analyst Level 1 & 2 Masterclass",
    issuer: "Udemy",
    year: "2026",
    verifyUrl: "https://www.udemy.com/certificate/UC-0af90e11-68ae-4cab-b91a-28a7ccb1d50d/",
  },

 {
    name: " Cyber Security-SOC and SIEM (SPLUNK&ELK) for Beginners",
    issuer: "Udemy",
    year: "2026",
    verifyUrl: "https://www.udemy.com/certificate/UC-ea164ff8-4a82-450f-a6c2-e242744a717f/",
  },

 {
    name: " The Complete Hands-On Cybersecurity Analyst Course ",
    issuer: "Udemy",
    year: "2026",
    verifyUrl: "https://www.udemy.com/certificate/UC-c59f84b1-157f-4d57-9d4d-a6fbad110f53/",
  },


 {
    name: "Ethical Hacking (Elite)",
    issuer: "NPTEL (IIT KHARAGPUR)",
    year: "2025",
    verifyUrl: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs142/Course/NPTEL25CS142S106690185310368447.pdf", // add your actual certificate link here
  },


  {
    name: " AWS For Everyone  ",
    issuer: "Udemy",
    year: "2026",
    verifyUrl: "https://www.udemy.com/certificate/UC-d98e372f-50dd-4fa2-8a55-a65951fdc777/",
  },

  {
    name: "Cisco Certified Network Associate Trainning ( CCNA )",
    issuer: "Webasha Technologies,Pune,India",
    year: "2026",
    verifyUrl: "https://lms.webasha.com/certificate/57a8404b49",
  },

     {
    name: "Red Hat Certified System Administrator ( RHCSA )",
    issuer: "Webasha Technologies,Pune,India ",
    year: "2026",
    verifyUrl: "https://lms.webasha.com/certificate/9e6a77e722",
  },

  {
    name: "Cybersecurity Job Simulation",
    issuer: "Mastercard",
    year: "2026",
    verifyUrl: "https://www.theforage.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_69d6ac46fd6a566814346588_1775851814747_completion_certificate.pdf",
  },
  {
    name: "Cyber Job Simulation",
    issuer: "Delollite",
    year: "2026",
    verifyUrl: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_69d6ac46fd6a566814346588_1775677062485_completion_certificate.pdf",
  },
  {
    name: "Cybersecurity Analyst Job Simulation",
    issuer: "TATA",
    year: "2026",
    verifyUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_69d6ac46fd6a566814346588_1775850978707_completion_certificate.pdf",
  },
  
]

export function CertificationsSection() {
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
    <section id="certifications" ref={sectionRef} className="relative py-20 lg:py-28">
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            data-animate
            className="mb-3 text-3xl font-bold text-foreground opacity-0 sm:text-4xl"
          >
            My <span className="text-primary">Certifications</span>
          </h2>
          <div
            data-animate
            className="mx-auto h-1 w-16 rounded-full bg-primary opacity-0"
            style={{ animationDelay: "0.1s" }}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <div
              key={cert.name}
              data-animate
              className="group flex items-start gap-4 rounded-xl border border-border bg-card/50 p-6 opacity-0 transition-all hover:border-primary/40 hover:bg-card"
              style={{ animationDelay: `${0.15 * (i + 1)}s` }}
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Award className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 font-semibold text-foreground">
                  {cert.name}
                </h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  {cert.issuer} &middot; {cert.year}
                </p>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Verify
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
