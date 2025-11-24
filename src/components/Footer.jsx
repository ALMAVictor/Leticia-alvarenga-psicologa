import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Psicóloga Letícia</h3>
            <p>Letícia Alvarenga Campos<br />CRP 06/207402</p>
            <p style={{ marginTop: '1rem' }}>Cuidando do seu bem-estar emocional com dedicação e profissionalismo.</p>
          </div>
          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contato</h4>
            <ul>
              <li>📧 contato@leticiapsicologa.com.br</li>
              <li>📱 (17) 98209-1946</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Psicóloga Leticia. Todos os direitos reservados.</p>
          <p className="footer-credit">
            Desenvolvido por{' '}
            <a 
              href="https://alphamarketing.digital" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-credit-link"
            >
              ALPHA - Marketing e Softwares
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

