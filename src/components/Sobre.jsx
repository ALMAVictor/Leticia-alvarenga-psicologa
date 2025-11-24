import React from 'react'
import './Sobre.css'

function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="container">
        <div className="sobre-content">
          <div className="sobre-text">
            <h2 className="section-title">Sobre Letícia</h2>
            <p className="sobre-nome-crp">
              <strong>Letícia Alvarenga Campos</strong><br />
              <span className="crp">CRP 06/207402</span>
            </p>
            <p className="sobre-description">
              Sou psicóloga formada em 2023, com um ano e meio de experiência em atendimento clínico. 
              Dedicada a oferecer um espaço seguro e acolhedor para o seu processo 
              de autoconhecimento e desenvolvimento pessoal.
            </p>
            <p className="sobre-description">
              Acredito que cada pessoa possui recursos internos para superar desafios 
              e alcançar uma vida mais plena. Meu trabalho é guiá-lo nessa jornada, 
              utilizando técnicas baseadas em evidências científicas e uma abordagem 
              humanizada.
            </p>
            <div className="sobre-features">
              <div className="feature-item">
                <div className="feature-icon">🎓</div>
                <div className="feature-text">
                  <h3>Formação</h3>
                  <p>Graduação em Psicologia (2023)</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📚</div>
                <div className="feature-text">
                  <h3>Pós-Graduações</h3>
                  <p>Teoria Cognitiva Comportamental<br />Neuropsicologia</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⏱️</div>
                <div className="feature-text">
                  <h3>Experiência</h3>
                  <p>Um ano e meio de atendimento clínico</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sobre-image">
            <img 
              src="/leticia-sobre.jpeg" 
              alt="Psicóloga Letícia Alvarenga Campos - CRP 06/207402" 
              className="sobre-photo"
              onError={(e) => {
                // Fallback caso a imagem não seja encontrada
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="sobre-placeholder" style={{ display: 'none' }}>
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" rx="20" fill="var(--accent-color)"/>
                <circle cx="100" cy="80" r="30" fill="var(--primary-color)"/>
                <path d="M 60 140 Q 100 120, 140 140" stroke="var(--primary-color)" strokeWidth="4" fill="none"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre

