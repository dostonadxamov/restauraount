"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [language, setLanguage] = useState<"uz" | "ru">("uz")

  return (
    <div className="min-h-screen">
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <HeroSection language={language} />
        <ServicesSection language={language} />
        <AdvantagesSection language={language} />
        <TestimonialsSection language={language} />
        <AboutSection language={language} />
        <ContactSection language={language} />
      </main>
      <Footer language={language} />
    </div>
  )
}
