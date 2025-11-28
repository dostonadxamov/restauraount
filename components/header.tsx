"use client"
import { Menu, X } from "lucide-react"
import { useState } from "react"

interface HeaderProps {
  language: "uz" | "ru"
  setLanguage: (lang: "uz" | "ru") => void
}

const translations = {
  uz: {
    services: "Xizmatlar",
    advantages: "Afzalliklar",
    testimonials: "Mijozlar fikri",
    about: "Biz haqimizda",
    contact: "Aloqa",
  },
  ru: {
    services: "Услуги",
    advantages: "Преимущества",
    testimonials: "Отзывы",
    about: "О нас",
    contact: "Контакты",
  },
}

export function Header({ language, setLanguage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = translations[language]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary overflow-hidden">
              <img src="/web-app-manifest-512x512.png" alt="BiSoft Logo" className="h-10 w-10 object-cover" />
            </div>
            <span className="text-xl font-bold text-foreground">BiSoft</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {t.services}
            </button>
            <button
              onClick={() => scrollToSection("advantages")}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {t.advantages}
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {t.testimonials}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {t.about}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {t.contact}
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-lg border border-border bg-muted p-1">
              <button
                onClick={() => setLanguage("uz")}
                className={`rounded px-3 py-1 text-sm font-medium transition-colors ${
                  language === "uz"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                UZ
              </button>
              <button
                onClick={() => setLanguage("ru")}
                className={`rounded px-3 py-1 text-sm font-medium transition-colors ${
                  language === "ru"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                RU
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="flex flex-col gap-4 border-t border-border py-4 md:hidden">
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {t.services}
            </button>
            <button
              onClick={() => scrollToSection("advantages")}
              className="text-left text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {t.advantages}
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-left text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {t.testimonials}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {t.about}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {t.contact}
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
