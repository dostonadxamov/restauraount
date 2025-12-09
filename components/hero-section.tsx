"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
  language: "uz" | "ru"
}

const translations = {
  uz: {
    title: " Biznesingiz uchun Professional Dasturiy Ta'minot",
    subtitle:
      "Biznesingizni avtomatlashtiring va samaradorlikni oshiring. 10 yillik tajriba va 24/7 qo'llab-quvvatlash bilan.",
    cta: "Bepul Konsultatsiya",
    demo: "Demo Ko'rish",
  },
  ru: {
    title: "Профессиональное ПО для Вашего программное обеспечение",
    subtitle: "Автоматизируйте бизнес и повысьте эффективность. 10 лет опыта и поддержка 24/7.",
    cta: "Бесплатная Консультация",
    demo: "Смотреть Демо",
  },
}

export function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language]

  // Scroll specifically to the footer element (not to any other element with id="contact")
  const scrollToFooter = () => {
    // Prefer footer with id="contact" if present, otherwise the first footer element
    const footer = document.querySelector('footer#contact') || document.querySelector('footer')
    if (!footer) return

    // Account for sticky header height so footer isn't hidden under it
    const header = document.querySelector('header')
    const headerHeight = header ? header.getBoundingClientRect().height : 0

    const top = footer.getBoundingClientRect().top + window.scrollY - headerHeight - 8
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/abstract-restaurant-pattern.jpg')] opacity-5"></div>
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl text-balance">
            {t.title}
          </h1>
          <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl text-pretty">{t.subtitle}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={scrollToFooter}
              className="bg-background text-foreground hover:bg-background/90 text-base font-semibold"
            >
              {t.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 text-base font-semibold"
            >
              {t.demo}
            </Button>
          </div>
        </div>

        {/* Hero Image/Mockup */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-5xl">
            <div className="aspect-video overflow-hidden rounded-xl border-4 border-primary-foreground/20 bg-background shadow-2xl">
              <img src="/images.png" alt="POS System Dashboard" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
