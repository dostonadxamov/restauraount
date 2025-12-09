import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { ShoppingCart, Users, BarChart3, Smartphone, Utensils, CreditCard, CheckCircle } from "lucide-react"

interface ServicesSectionProps {
  language: "uz" | "ru"
}

const translations = {
  uz: {
    title: "Bizning Xizmatlarimiz",
    subtitle: "Sizning biznesingiz uchun aqlli yechimlar!",
    services: [
      {
        icon: ShoppingCart,
        title: "POS Tizimi",
        description: "Zamonaviy va oson foydalaniladigan kassa tizimi",
      },
      {
        icon: Users,
        title: "Mijozlar Boshqaruvi",
        description: "CRM tizimi va sodiqlik dasturlari",
      },
      {
        icon: BarChart3,
        title: "Analitika va Hisobotlar",
        description: "Real vaqtda biznes ko'rsatkichlari",
      },
      {
        icon: Smartphone,
        title: "Mobil Ilova",
        description: "Android va iOS uchun mobil dastur",
      },
      {
        icon: Utensils,
        title: "Menyu Boshqaruvi",
        description: "Oson menyu yaratish va tahrirlash",
      },
      {
        icon: CreditCard,
        title: "To'lov Tizimlari",
        description: "Barcha to'lov usullari integratsiyasi",
      },
    ],
  },
  ru: {
    title: "Наши Услуги",
    subtitle: "Умные решения для вашего бизнеса!",
    services: [
      {
        icon: ShoppingCart,
        title: "POS Система",
        description: "Современная и простая в использовании кассовая система",
      },
      {
        icon: Users,
        title: "Управление Клиентами",
        description: "CRM система и программы лояльности",
      },
      {
        icon: BarChart3,
        title: "Аналитика и Отчеты",
        description: "Бизнес-показатели в реальном времени",
      },
      {
        icon: Smartphone,
        title: "Мобильное Приложение",
        description: "Мобильное приложение для Android и iOS",
      },
      {
        icon: Utensils,
        title: "Управление Меню",
        description: "Легкое создание и редактирование меню",
      },
      {
        icon: CreditCard,
        title: "Платежные Системы",
        description: "Интеграция всех способов оплаты",
      },
    ],
  },
}

export function ServicesSection({ language }: ServicesSectionProps) {
  const t = translations[language]

  const extraServiceSections = [
    {
      title: "📌 Ulgurji, chakana va tarmoqli savdo do‘konlari",
      items: [
        "Supermarket", "Minimarket", "Ulgurji oziq-ovqat bazalari",
        "Kredit savdo do‘konlari", "Aksessuar do‘konlari",
        "Kanstovarlar", "Parfyumeriya", "Kiyim-kechak",
        "Dorixonalar", "Qurilish mollari", "Tarmoqli savdo do‘konlari",
      ],
    },
    {
      title: "📌 Xizmat ko‘rsatish nuqtalari",
      items: [
        "Kafe, restoran", "Oshxona, choyxona", "Klinika",
        "Mehmonxonalar", "O‘quv markazlari",
        "O‘yin klublari", "Dam olish maskanlari",
      ],
    },
    {
      title: "📌 Ishlab chiqarish korxonalari",
      items: [
        "Mebel ishlab chiqarish", "Kiyim-kechak sexlari",
        "Temir va truba zavodlari", "Plastmassa ishlab chiqarish",
        "Qurilish mollari ishlab chiqarish", "Oziq-ovqat zavodlari",
      ],
    },
    {
      title: "📌 Qo‘shimcha xizmatlar",
      items: [
        "Veb-saytlar yaratish", "Telegram botlar",
        "Internet-do‘konlar", "Mobil ilovalar",
        "Turniket tizimlari", "Biometrik tizimlar",
      ],
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">

        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl md:text-5xl font-bold text-foreground">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        {/* Service grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group border-2 transition-all hover:shadow-lg hover:border-primary">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}

          {/* Accordion Section */}
          <Card className="md:col-span-2 lg:col-span-3 border-2 hover:border-primary transition-all">
            <CardContent className="p-6 md:p-10">

              <Accordion type="single" collapsible className="space-y-6">
                {extraServiceSections.map((section, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-xl px-4">
                    <AccordionTrigger className="text-left text-xl md:text-2xl font-semibold py-4">
                      {section.title}
                    </AccordionTrigger>

                    <AccordionContent>
                      <ul className="space-y-2 mt-2">
                        {section.items.map((item, iIndex) => (
                          <li key={iIndex} className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle className="w-5 h-5 text-primary mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}
