"use server"

export async function sendToTelegram(formData: {
  name: string
  phone: string
  email: string
  message: string
}) {
  try {
    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN
    const telegramChatId = process.env.TELEGRAM_CHAT_ID

    if (!telegramBotToken || !telegramChatId) {
      throw new Error("Telegram credentials not configured")
    }

    const message = `
🆕 Yangi Murojaat / Новое Обращение

👤 Ism / Имя: ${formData.name}
📞 Telefon / Телефон: ${formData.phone}
📧 Email: ${formData.email}
💬 Xabar / Сообщение: ${formData.message}
    `

    const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: message,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to send message to Telegram")
    }

    return { success: true }
  } catch (error) {
    console.error("Error sending to Telegram:", error)
    return { success: false, error: "Failed to send message" }
  }
}
