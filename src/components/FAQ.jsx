import React, { useState } from 'react'
import './FAQ.css'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      pergunta: 'Como funciona o atendimento psicológico?',
      resposta: 'O atendimento psicológico é um processo de autoconhecimento e desenvolvimento pessoal. Nas sessões, trabalhamos juntos para identificar padrões de pensamento e comportamento, desenvolver estratégias de enfrentamento e promover mudanças positivas na sua vida.'
    },
    {
      pergunta: 'Quanto tempo dura cada sessão?',
      resposta: 'Cada sessão tem duração de aproximadamente 50 minutos. A frequência das sessões é definida em conjunto, geralmente semanal ou quinzenal, dependendo das suas necessidades.'
    },
    {
      pergunta: 'Como funciona o atendimento online?',
      resposta: 'O atendimento é realizado 100% online, através de plataforma de videoconferência. A plataforma será definida no momento do agendamento, conforme sua preferência. Garantimos total privacidade, segurança e a mesma qualidade do atendimento presencial.'
    },
    {
      pergunta: 'Como sei se preciso de terapia?',
      resposta: 'A terapia pode ajudar em diversas situações: dificuldades emocionais, relacionamentos, ansiedade, depressão, estresse, traumas, ou simplesmente para autoconhecimento. Se você sente que algo não está bem ou quer se desenvolver pessoalmente, a terapia pode ser uma excelente opção.'
    },
    {
      pergunta: 'As informações são confidenciais?',
      resposta: 'Sim! O sigilo profissional é garantido pelo Código de Ética Profissional do Psicólogo. Todas as informações compartilhadas nas sessões são absolutamente confidenciais e protegidas.'
    },
    {
      pergunta: 'Quanto custa uma consulta?',
      resposta: 'Os valores são informados durante o primeiro contato. Entre em contato pelo WhatsApp para conhecer os planos e valores disponíveis. Ofereço condições especiais para pacotes de sessões.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title section-title-center">Perguntas Frequentes</h2>
        <p className="faq-subtitle">
          Tire suas dúvidas sobre o atendimento psicológico
        </p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.pergunta}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.resposta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

