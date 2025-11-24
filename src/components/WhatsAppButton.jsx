import React from 'react'
import './WhatsAppButton.css'

function WhatsAppButton() {
  const handleClick = () => {
    const whatsappNumber = '5517982091946'
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta.')
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <button className="whatsapp-button" onClick={handleClick} aria-label="Falar no WhatsApp">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.825.744 5.48 2.044 7.784L0 32l8.447-2.012C10.64 31.256 13.24 32 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333c-2.456 0-4.764-.64-6.76-1.76l-.483-.283-4.98 1.187 1.2-4.84-.315-.5A13.26 13.26 0 012.667 16c0-7.36 5.973-13.333 13.333-13.333S29.333 8.64 29.333 16 23.36 29.333 16 29.333z" fill="currentColor"/>
        <path d="M23.36 18.213c-.307-.154-1.813-.893-2.093-.997-.28-.104-.483-.154-.687.154-.204.307-.787.997-.965 1.2-.178.204-.356.23-.66.077-.307-.154-1.293-.477-2.467-1.52-.912-.813-1.527-1.813-1.707-2.12-.178-.307-.02-.473.134-.627.138-.138.307-.36.46-.54.154-.18.205-.307.307-.512.104-.204.052-.384-.026-.54-.077-.154-.687-1.653-.94-2.267-.247-.6-.52-.52-.687-.527-.178-.013-.384-.023-.59-.023-.204 0-.54.077-.82.387-.28.307-1.08 1.053-1.08 2.56 0 1.507 1.093 2.96 1.24 3.16.154.2 2.147 3.267 5.2 4.573.72.307 1.28.493 1.72.627.733.227 1.4.195 1.927.12.587-.08 1.813-.74 2.067-1.453.254-.714.254-1.327.18-1.454-.08-.12-.28-.193-.587-.347z" fill="currentColor"/>
      </svg>
      <span className="whatsapp-tooltip">Fale conosco no WhatsApp</span>
    </button>
  )
}

export default WhatsAppButton

