"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialsSectionProps {
  language: "uz" | "ru"
}

const translations = {
  uz: {
    title: "Mijozlarimiz Fikri",
    subtitle: "Bizning mijozlarimiz biz haqimizda nima deyishadi",
    testimonials: [
      {
        name: "Aziz Karimov",
        business: "Osh Markazi",
        rating: 5,
        comment: "Juda qulay va oson dastur. Xodimlarimiz tez o'rganib olishdi. Qo'llab-quvvatlash xizmati a'lo!",
        image: "/uzbek-restaurant-owner.jpg",
      },
      {
        name: "Dilshod Rahimov",
        business: "Fast Food Chain",
        rating: 5,
        comment: "Bir marta to'lov qilish imkoniyati bizga juda yoqdi. Boshqa dasturlarda oylik to'lovlar ko'p edi.",
        image: "/uzbek-businessman.jpg",
      },
      {
        name: "Nodira Alimova",
        business: "Milliy Taomlar Kafe",
        rating: 5,
        comment: "24/7 qo'llab-quvvatlash juda foydali. Har qanday muammoda darhol yordam berishadi.",
        image: "/uzbek-cafe-owner.jpg",
      },
    ],
  },
  ru: {
    title: "Отзывы Клиентов",
    subtitle: "Что говорят наши клиенты о нас",
    testimonials: [
      {
        name: "Азиз Каримов",
        business: "Ош Маркази",
        rating: 5,
        comment: "Очень удобная и простая программа. Наши сотрудники быстро научились. Служба поддержки отличная!",
        image: "/uzbek-restaurant-owner.jpg",
      },
      {
        name: "Дилшод Рахимов",
        business: "Сеть Фастфуд",
        rating: 5,
        comment:
          "Возможность единоразовой оплаты нам очень понравилась. В других программах было много ежемесячных платежей.",
        image: "/uzbek-businessman.jpg",
      },
      {
        name: "Нодира Алимова",
        business: "Кафе Национальных Блюд",
        rating: 5,
        comment: "Поддержка 24/7 очень полезна. При любой проблеме сразу помогают.",
        image: "/uzbek-cafe-owner.jpg",
      },
    ],
  },
}

export function TestimonialsSection({ language }: TestimonialsSectionProps) {
  const t = translations[language]

  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl text-balance">{t.title}</h2>
          <p className="text-lg text-muted-foreground md:text-xl text-pretty">{t.subtitle}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 transition-all hover:border-primary hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                  </div>
                </div>
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">{testimonial.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
