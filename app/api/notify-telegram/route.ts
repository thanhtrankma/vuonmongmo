import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { name, phone, address, items, total } = await request.json()

  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    return NextResponse.json(
      { error: 'Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID' },
      { status: 500 }
    )
  }

  const itemsText =
    items && Array.isArray(items) && items.length > 0
      ? items
          .map(
            (item: any) =>
              `• ${item.name} x${item.quantity} - ${new Intl.NumberFormat('vi-VN').format(item.price)}đ`
          )
          .join('\n')
      : 'Không có sản phẩm'

  const message = [
    '🧾 Đơn hàng mới từ Vườn Mơ Màng',
    `👤 Tên: ${name || 'Chưa cung cấp'}`,
    `📞 SĐT: ${phone || 'Chưa cung cấp'}`,
    `🏠 Địa chỉ: ${address || 'Chưa cung cấp'}`,
    '',
    '🛒 Sản phẩm:',
    itemsText,
    '',
    `💰 Tổng: ${new Intl.NumberFormat('vi-VN').format(total || 0)}đ`,
  ].join('\n')

  try {
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
    
    const res = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message }),
    })

    
    if (!res.ok) {
      const err = await res.text()
      return NextResponse.json({ error: 'Failed to send telegram', detail: err }, { status: 500 })
    }

    const result = await res.json()
    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json({ 
      error: 'Fetch failed', 
      detail: error instanceof Error ? error.message : String(error) 
    }, { status: 500 })
  }
}

