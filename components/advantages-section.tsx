import { Check } from "lucide-react"

interface AdvantagesSectionProps {
  language: "uz" | "ru"
}

const translations = {
  uz: {
    title: "Bizning Afzalliklarimiz",
    subtitle: "Nima uchun bizni tanlashadi?",
    advantages: [
      "10 yillik doimiy texnik xizmatimiz",
      "3-5 kunlik o'qitib o'rgatish tizimimiz",
      "24/7 Call center xizmati",
      "SOLIQ integratsiya",
      "Telegram bot integratsiya",
      "Yandex Eats, Uzum tezkor integratsiya",
      "Ma'lumotlar faqat o'zingiz ko'rasiz. Hatto bizga ko'rinmaydi",
      "Dasturimiz narxi boshqa kompaniyalarga nisbatan ancha arzon",
      "Rus tilidagi versiyamiz mavjud",
      "OYLIK TO'LOV MAVJUD EMAS (butun umr uchun bir marta to'lov)",
    ],
  },
  ru: {
    title: "Наши Преимущества",
    subtitle: "Почему выбирают нас?",
    advantages: [
      "10 лет постоянной технической поддержки",
      "Система обучения 3-5 дней",
      "Служба поддержки 24/7",
      "Интеграция с НАЛОГ",
      "Интеграция Telegram бота",
      "Быстрая интеграция Yandex Eats, Uzum",
      "Данные видите только вы. Даже нам не видны",
      "Цена нашей программы намного дешевле других компаний",
      "Доступна русская версия",
      "НЕТ ЕЖЕМЕСЯЧНОЙ ОПЛАТЫ (единоразовая оплата на всю жизнь)",
    ],
  },
}

export function AdvantagesSection({ language }: AdvantagesSectionProps) {
  const t = translations[language]

  return (
    <section id="advantages" className="bg-muted/50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl text-balance">{t.title}</h2>
          <p className="text-lg text-muted-foreground md:text-xl text-pretty">{t.subtitle}</p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {t.advantages.map((advantage, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-lg bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
                <p className="text-base font-medium text-card-foreground leading-relaxed">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
