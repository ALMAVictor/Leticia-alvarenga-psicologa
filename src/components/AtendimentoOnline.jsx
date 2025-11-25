import React, { useState, useRef, useEffect } from 'react'
import { HiComputerDesktop, HiClock, HiSparkles, HiLockClosed } from 'react-icons/hi2'
import './AtendimentoOnline.css'

function AtendimentoOnline() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)

  const cards = [
    {
      icon: HiComputerDesktop,
      title: 'Plataforma',
      description: 'A plataforma de atendimento será definida no momento do agendamento, conforme sua preferência e disponibilidade. Trabalhamos com as principais plataformas de videoconferência.'
    },
    {
      icon: HiClock,
      title: 'Horários de Atendimento',
      description: 'Segunda a Sexta: 8h às 18h\nSábado: 8h às 12h'
    },
    {
      icon: HiSparkles,
      title: 'Benefícios do Atendimento Online',
      description: 'Comodidade, flexibilidade de horários, economia de tempo e deslocamento, privacidade no seu ambiente, e a mesma qualidade do atendimento presencial.'
    },
    {
      icon: HiLockClosed,
      title: 'Privacidade e Segurança',
      description: 'Garantimos total confidencialidade e sigilo profissional. As sessões são realizadas em ambiente seguro e privado, respeitando o Código de Ética Profissional.'
    }
  ]

  // Função para atualizar o índice baseado no scroll
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft
      const containerWidth = carousel.offsetWidth
      const cardWidth = containerWidth * 0.85
      const gap = 20
      const totalCardWidth = cardWidth + gap
      
      let newIndex = Math.round(scrollLeft / totalCardWidth)
      
      const paddingLeft = (containerWidth - cardWidth) / 2
      if (scrollLeft < paddingLeft) {
        newIndex = 0
      } else {
        newIndex = Math.round((scrollLeft - paddingLeft) / totalCardWidth)
      }
      
      const clampedIndex = Math.max(0, Math.min(newIndex, cards.length - 1))
      setCurrentIndex(clampedIndex)
    }

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    carousel.addEventListener('scroll', onScroll, { passive: true })
    handleScroll()

    return () => {
      carousel.removeEventListener('scroll', onScroll)
    }
  }, [cards.length])

  // Função para scroll suave para um índice específico
  const scrollToIndex = (index) => {
    const carousel = carouselRef.current
    if (!carousel) return
    
    const containerWidth = carousel.offsetWidth
    const cardWidth = containerWidth * 0.85
    const gap = 20
    const totalCardWidth = cardWidth + gap
    const paddingLeft = (containerWidth - cardWidth) / 2
    
    carousel.scrollTo({
      left: paddingLeft + (index * totalCardWidth),
      behavior: 'smooth'
    })
  }

  return (
    <section id="atendimento-online" className="atendimento-online">
      <div className="container">
        <h2 className="section-title section-title-center">Atendimento Online</h2>
        <p className="atendimento-subtitle">
          Cuidado psicológico de qualidade, no conforto da sua casa
        </p>
        <div className="atendimento-content">
          {/* Grid normal para desktop */}
          <div className="atendimento-cards">
            {cards.map((card, index) => {
              const IconComponent = card.icon
              return (
                <div key={index} className="atendimento-card">
                  <div className="card-icon">
                    <IconComponent />
                  </div>
                  <div className="card-content">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
          {/* Carrossel premium para mobile */}
          <div className="atendimento-wrapper-mobile">
            <div className="atendimento-carousel" ref={carouselRef}>
              {cards.map((card, index) => {
                const IconComponent = card.icon
                return (
                  <div 
                    key={index} 
                    className={`atendimento-card-carousel ${index === currentIndex ? 'active' : ''}`}
                  >
                    <div className="card-icon">
                      <IconComponent />
                    </div>
                    <div className="card-content">
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            {/* Indicadores de posição */}
            <div className="carousel-indicators">
              {cards.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => scrollToIndex(index)}
                  aria-label={`Ir para card ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AtendimentoOnline

