"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { sendToTelegram } from "@/app/actions/send-telegram"

interface ContactSectionProps {
  language: "uz" | "ru"
}

const translations = {
  uz: {
    title: "Biz Bilan Bog'laning",
    subtitle: "Savollaringiz bormi? Biz bilan bog'laning!",
    name: "Ismingiz",
    phone: "Telefon raqamingiz",
    email: "Email manzilingiz",
    message: "Xabaringiz",
    submit: "Yuborish",
    contactInfo: "Aloqa Ma'lumotlari",
    phoneLabel: "Telefon",
    emailLabel: "Email",
    addressLabel: "Manzil",
    success: "Xabaringiz muvaffaqiyatli yuborildi!",
    error: "Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.",
  },
  ru: {
    title: "Свяжитесь с Нами",
    subtitle: "Есть вопросы? Свяжитесь с нами!",
    name: "Ваше имя",
    phone: "Ваш телефон",
    email: "Ваш email",
    message: "Ваше сообщение",
    submit: "Отправить",
    contactInfo: "Контактная Информация",
    phoneLabel: "Телефон",
    emailLabel: "Email",
    addressLabel: "Адрес",
    success: "Ваше сообщение успешно отправлено!",
    error: "Произошла ошибка. Пожалуйста, попробуйте снова.",
  },
}

export function ContactSection({ language }: ContactSectionProps) {
  const t = translations[language]
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendToTelegram(formData)

      if (result.success) {
        toast({
          title: t.success,
          description: language === "uz" ? "Tez orada siz bilan bog'lanamiz." : "Мы свяжемся с вами в ближайшее время.",
        })
        setFormData({ name: "", phone: "", email: "", message: "" })
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      toast({
        title: t.error,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl text-balance">{t.title}</h2>
          <p className="text-lg text-muted-foreground md:text-xl text-pretty">{t.subtitle}</p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="border-2">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    {t.name}
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                    {t.phone}
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    {t.email}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    {t.message}
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    language === "uz" ? (
                      "Yuborilmoqda..."
                    ) : (
                      "Отправка..."
                    )
                  ) : (
                    <>
                      {t.submit}
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="mb-6 text-xl font-bold text-foreground">{t.contactInfo}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{t.phoneLabel}</div>
                      <a href="tel:+998701131177" className="text-muted-foreground hover:text-primary">
                        +998 70 113 11 77
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{t.emailLabel}</div>
                      <a href="mailto:bisoftuz@gmail.com" className="text-muted-foreground hover:text-primary">
                         bisoftuz@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{t.addressLabel}</div>
                      <p className="text-muted-foreground">
                        {language === "uz" ? "Toshkent, O'zbekiston" : "Ташкент, Узбекистан"}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <div className="aspect-video overflow-hidden rounded-lg border-2 border-border">
              <img src="/tashkent-map.jpg" alt="Map" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
