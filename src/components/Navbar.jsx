import React, { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const handleWhatsApp = () => {
    const whatsappNumber = '5517982091946'
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta.')
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-text">Psicóloga Letícia</span>
        </div>
        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#sobre" onClick={() => scrollToSection('sobre')}>Sobre</a>
          <a href="#servicos" onClick={() => scrollToSection('servicos')}>Serviços</a>
          <a href="#depoimentos" onClick={() => scrollToSection('depoimentos')}>Depoimentos</a>
          <a href="#faq" onClick={() => scrollToSection('faq')}>FAQ</a>
          <a href="#atendimento-online" onClick={() => scrollToSection('atendimento-online')}>Atendimento Online</a>
          <a href="#contato" onClick={() => scrollToSection('contato')}>Contato</a>
          <button className="navbar-cta" onClick={handleWhatsApp}>
            Agendar
          </button>
        </div>
        <button 
          className="navbar-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar

