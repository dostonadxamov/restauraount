"use client"

import { Facebook, Instagram, Youtube, Send } from "lucide-react"

interface FooterProps {
  language: "uz" | "ru"
}

const translations = {
  uz: {
    description: "Biznesingiz uchun professional dasturiy ta'minot",
    quickLinks: "Tezkor Havolalar",
    services: "Xizmatlar",
    advantages: "Afzalliklar",
    testimonials: "Mijozlar fikri",
    about: "Biz haqimizda",
    contact: "Aloqa",
    followUs: "Bizni Kuzatib Boring",
    rights: "Barcha huquqlar himoyalangan",
  },
  ru: {
    description: "Профессиональное программное обеспечение для вашего бизнеса",
    quickLinks: "Быстрые Ссылки",
    services: "Услуги",
    advantages: "Преимущества",
    testimonials: "Отзывы",
    about: "О нас",
    contact: "Контакты",
    followUs: "Следите за Нами",
    rights: "Все права защищены",
  },
}

export function Footer({ language }: FooterProps) {
  const t = translations[language]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer id="contact" className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary overflow-hidden">
                  <img src="/web-app-manifest-512x512.png" alt="BiSoft Logo" className="h-10 w-10 object-cover" />
                </div>
              </div>
              <span className="text-xl font-bold text-foreground">BiSoft</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-foreground">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("advantages")}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t.advantages}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t.testimonials}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-foreground">{t.contact}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:+998701131177" className="transition-colors hover:text-primary">
                  +998 70 113 11 77
                </a>
              </li>
              <li>
                <a href="mailto:bisoftuz@gmail.com" className="transition-colors hover:text-primary">
                  bisoftuz@gmail.com
                </a>
              </li>
              <li>{language === "uz" ? "Toshkent, O'zbekiston" : "Ташкент, Узбекистан"}</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-foreground">{t.followUs}</h3>
            <div className="flex gap-3">
              <a
                href="https://t.me/bisoftuz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/bisoft_uz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61577380953967"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2025 BISOFT - DASTURLASH KOMPANIYASI Barcha huquqlar himoyalangan</p>
        </div>
      </div>
    </footer>
  )
}
