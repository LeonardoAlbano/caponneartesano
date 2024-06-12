import React from 'react'
import { RiWhatsappLine } from 'react-icons/ri'

export default function WhatsAppButton() {
  const phoneNumber = '+5547991142332'
  const message = 'Olá, vim através do site e gostaria de mais informações.'
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 rounded-full bg-green-500 p-4 text-white shadow-lg transition hover:scale-110 hover:bg-green-600 "
      aria-label="Chat on WhatsApp"
    >
      <RiWhatsappLine size={32} />
    </a>
  )
}
