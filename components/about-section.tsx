import { Building2, Users2, Award, TrendingUp } from "lucide-react"

interface AboutSectionProps {
  language: "uz" | "ru"
}

const translations = {
  uz: {
    title: "Biz Haqimizda",
    subtitle: "Biznesingizni rivojlantirishga va savdoyingizni oshirishga yordam beramiz.",
    description: "Biz 5 yildan ortiq vaqt davomida 500+ yirik kompaniyalar uchun professional dasturiy ta'minotimiz bilan xizmat ko'rsatib kelmoqdamiz. Bizning maqsadimiz - mijozlarimizning biznesini avtomatlashtirish va samaradorligini oshirish.",
    stats: [
      { icon: Building2, value: "500+", label: "Faol Mijozlar" },
      { icon: Users2, value: "50+", label: "Mutaxassislar" },
      { icon: Award, value: "5+", label: "Yillik Tajriba" },
      { icon: TrendingUp, value: "98%", label: "Mijozlar Qoniqishi" },
    ],
  },
  ru: {
    title: "О Нас",
    subtitle: "Мы помогаем вам развивать свой бизнес и увеличивать продажи.",
    description:
      "Мы разрабатываем и продаем профессиональное программное обеспечение для кафе, ресторанов, фастфуда и точек питания более 10 лет. Наша цель - автоматизировать бизнес наших клиентов и повысить его эффективность.",
    stats: [
      { icon: Building2, value: "500+", label: "Активных Клиентов" },
      { icon: Users2, value: "50+", label: "Специалистов" },
      { icon: Award, value: "10+", label: "Лет Опыта" },
      { icon: TrendingUp, value: "98%", label: "Удовлетворенность" },
    ],
  },
}

export function AboutSection({ language }: AboutSectionProps) {
  const t = translations[language]

  return (
    <section id="about" className="bg-muted/50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl text-balance">{t.title}</h2>
          <p className="text-lg text-muted-foreground md:text-xl text-pretty">{t.subtitle}</p>
        </div>

        <div className="mx-auto max-w-4xl">
          <p className="mb-12 text-center text-lg text-foreground leading-relaxed">{t.description}</p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="flex flex-col items-center rounded-lg bg-card p-6 text-center shadow-sm">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="mb-2 text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
