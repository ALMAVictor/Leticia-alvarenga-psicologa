import React from 'react'
import { FaStar } from 'react-icons/fa'
import './Depoimentos.css'

function Depoimentos() {
  const depoimentos = [
    {
      nome: 'Maria S.',
      texto: 'A terapia com a Letícia mudou minha vida. Ela é muito acolhedora e profissional. Consegui superar minha ansiedade e hoje me sinto muito mais confiante.',
      rating: 5
    },
    {
      nome: 'João P.',
      texto: 'Excelente profissional! A abordagem da Letícia é muito eficaz. Recomendo para todos que buscam autoconhecimento e bem-estar emocional.',
      rating: 5
    },
    {
      nome: 'Ana C.',
      texto: 'Atendimento humanizado e de qualidade. A Letícia me ajudou a entender melhor meus sentimentos e desenvolver estratégias para lidar com os desafios do dia a dia.',
      rating: 5
    }
  ]

  return (
    <section id="depoimentos" className="depoimentos">
      <div className="container">
        <h2 className="section-title section-title-center">O que dizem nossos pacientes</h2>
        <p className="depoimentos-subtitle">
          Depoimentos reais de pessoas que transformaram suas vidas através da terapia
        </p>
        <div className="depoimentos-grid">
          {depoimentos.map((depoimento, index) => (
            <div key={index} className="depoimento-card">
              <div className="depoimento-stars">
                {[...Array(depoimento.rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              <p className="depoimento-texto">"{depoimento.texto}"</p>
              <div className="depoimento-autor">
                <div className="depoimento-avatar">
                  {depoimento.nome.charAt(0)}
                </div>
                <span className="depoimento-nome">{depoimento.nome}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Depoimentos

