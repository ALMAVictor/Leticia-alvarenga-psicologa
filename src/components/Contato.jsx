import React, { useState } from 'react'
import { HiEnvelope, HiDevicePhoneMobile, HiComputerDesktop } from 'react-icons/hi2'
import './Contato.css'

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Formata a mensagem com os dados do formulário
    const mensagemWhatsApp = `*Nome:* ${formData.nome}
*Email:* ${formData.email}
*Telefone:* ${formData.telefone}

*Mensagem:*
${formData.mensagem}`

    // Codifica a mensagem para URL
    const mensagemEncoded = encodeURIComponent(mensagemWhatsApp)
    
    // Número do WhatsApp (formato: 5517982091946)
    const whatsappNumber = '5517982091946'
    
    // Cria a URL do WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${mensagemEncoded}`
    
    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank')
    
    // Limpa o formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      mensagem: ''
    })
  }

  return (
    <section id="contato" className="contato">
      <div className="container">
        <div className="contato-content">
          <div className="contato-info">
            <h2 className="section-title">Entre em Contato</h2>
            <p className="contato-description">
              Estou aqui para ajudar você. Entre em contato para agendar uma consulta 
              ou tirar suas dúvidas. Seu bem-estar é minha prioridade.
            </p>
            <div className="contato-details">
              <div className="contato-item">
                <div className="contato-icon">
                  <HiEnvelope />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>contato@leticiapsicologa.com.br</p>
                </div>
              </div>
              <div className="contato-item">
                <div className="contato-icon">
                  <HiDevicePhoneMobile />
                </div>
                <div>
                  <h3>WhatsApp</h3>
                  <p>(17) 98209-1946</p>
                </div>
              </div>
              <div className="contato-item">
                <div className="contato-icon">
                  <HiComputerDesktop />
                </div>
                <div>
                  <h3>Modalidade</h3>
                  <p>Atendimento 100% Online</p>
                </div>
              </div>
            </div>
          </div>
          <form className="contato-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome Completo</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                placeholder="Seu nome"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
                placeholder="(00) 00000-0000"
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Como posso ajudar você?"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-full">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contato

