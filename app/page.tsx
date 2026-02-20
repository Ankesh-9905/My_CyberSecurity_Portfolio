import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ObjectiveSection } from "@/components/objective-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ToolsSection } from "@/components/tools-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { LabsSection } from "@/components/labs-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ResumeSection } from "@/components/resume-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ContactSection } from "@/components/contact-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ObjectiveSection />
        <AboutSection />
        <SkillsSection />
        <ToolsSection />
        <ServicesSection />
        <ProjectsSection />
        <LabsSection />
        <CertificationsSection />
        <ResumeSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  )
}
