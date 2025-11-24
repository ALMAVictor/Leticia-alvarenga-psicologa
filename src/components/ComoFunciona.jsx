import React from 'react'
import './ComoFunciona.css'

function ComoFunciona() {
  const passos = [
    {
      numero: '01',
      titulo: 'Primeiro Contato',
      descricao: 'Entre em contato pelo WhatsApp ou formulário. Vamos conversar sobre suas necessidades e agendar a primeira consulta.'
    },
    {
      numero: '02',
      titulo: 'Avaliação Inicial',
      descricao: 'Na primeira sessão, faremos uma avaliação completa para entender sua história, objetivos e definir o plano de tratamento.'
    },
    {
      numero: '03',
      titulo: 'Processo Terapêutico',
      descricao: 'Durante as sessões, trabalhamos juntos utilizando técnicas de TCC e Neuropsicologia para promover mudanças positivas.'
    },
    {
      numero: '04',
      titulo: 'Acompanhamento',
      descricao: 'Acompanhamos seu progresso, ajustando estratégias conforme necessário para garantir os melhores resultados.'
    }
  ]

  return (
    <section id="como-funciona" className="como-funciona">
      <div className="container">
        <h2 className="section-title section-title-center">Como Funciona</h2>
        <p className="como-funciona-subtitle">
          Um processo simples e acolhedor para sua jornada de transformação
        </p>
        <div className="passos-container">
          {passos.map((passo, index) => (
            <div key={index} className="passo-item">
              <div className="passo-numero">{passo.numero}</div>
              <div className="passo-content">
                <h3 className="passo-titulo">{passo.titulo}</h3>
                <p className="passo-descricao">{passo.descricao}</p>
              </div>
              {index < passos.length - 1 && <div className="passo-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ComoFunciona

