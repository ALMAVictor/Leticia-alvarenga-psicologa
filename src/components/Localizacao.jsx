import React from 'react'
import './Localizacao.css'

function Localizacao() {
  const endereco = "R. da Fé, 265 - Jardim Urano"
  const enderecoCompleto = "R. da Fé, 265 - Jardim Urano, São José do Rio Preto - SP, 15084-230"
  
  // URL para abrir no Google Maps
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(enderecoCompleto)}`
  
  return (
    <section id="localizacao" className="localizacao">
      <div className="container">
        <h2 className="section-title section-title-center">Nossa Localização</h2>
        <p className="localizacao-subtitle">
          Venha nos visitar ou agende uma consulta online
        </p>
        <div className="localizacao-content">
          <div className="mapa-container">
            <div className="mapa-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.0296981147626!2d-49.374953999999995!3d-20.8305072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdb2b09851d83d%3A0x3ca4276137c112d1!2sR.%20da%20F%C3%A9%2C%20265%20-%20Jardim%20Urano%2C%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20-%20SP%2C%2015084-230!5e0!3m2!1spt-BR!2sbr!4v1764007887098!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização - Psicóloga Letícia"
              ></iframe>
            </div>
            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mapa-link"
            >
              <span>📍</span>
              <span>Abrir no Google Maps</span>
              <span>→</span>
            </a>
          </div>
          <div className="localizacao-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3>Endereço</h3>
                <p>{enderecoCompleto}</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">🕐</div>
              <div className="info-content">
                <h3>Horário de Atendimento</h3>
                <p>Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 12h</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">💻</div>
              <div className="info-content">
                <h3>Atendimento Online</h3>
                <p>Também oferecemos consultas online para sua comodidade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Localizacao

