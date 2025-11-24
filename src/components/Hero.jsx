import React from 'react'
import './Hero.css'

function Hero() {
  const handleAgendarClick = () => {
    const contatoSection = document.getElementById('contato')
    if (contatoSection) {
      contatoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      {/* Efeitos decorativos de fundo */}
      <div className="hero-background-effects">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content fade-in-left">
          <h1 className="hero-title">
            Bem-vindo ao seu espaço de <span className="highlight">cuidado e acolhimento</span>
          </h1>
          <p className="hero-subtitle">
            Psicóloga Letícia Alvarenga Campos - CRP 06/207402<br />
            Atendimento psicológico especializado para ajudar você 
            a encontrar equilíbrio e bem-estar emocional.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={handleAgendarClick}>
              Agendar Consulta
            </button>
            <button className="btn btn-secondary" onClick={() => {
              document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Conhecer Mais
            </button>
          </div>
        </div>
        <div className="hero-image fade-in-right">
          <div className="hero-photo-wrapper">
            <div className="hero-photo-glow"></div>
            <img 
              src="/leticia-hero.jpeg" 
              alt="Psicóloga Letícia Alvarenga Campos - CRP 06/207402" 
              className="hero-photo"
            onError={(e) => {
              // Fallback caso a imagem não seja encontrada
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
            />
          </div>
          <div className="hero-placeholder" style={{ display: 'none' }}>
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" fill="var(--accent-color)"/>
              <path d="M100 70 C 85 70, 75 85, 75 100 C 75 115, 85 130, 100 130 C 115 130, 125 115, 125 100 C 125 85, 115 70, 100 70 Z" fill="var(--primary-color)"/>
              <path d="M 70 150 Q 100 140, 130 150" stroke="var(--primary-color)" strokeWidth="3" fill="none"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

