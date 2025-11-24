import React from 'react'
import './Servicos.css'

function Servicos() {
  const servicos = [
    {
      image: '/images/servicos/terapia1.png',
      title: 'Psicoterapia Individual',
      description: 'Atendimento personalizado para trabalhar questões emocionais, comportamentais e de desenvolvimento pessoal.'
    },
    {
      image: '/images/servicos/terapiacasal1.png',
      title: 'Terapia de Casal',
      description: 'Acompanhamento para casais que desejam melhorar a comunicação e fortalecer o relacionamento.'
    },
    {
      image: '/images/servicos/terapiafamiliar1.png',
      title: 'Terapia Familiar',
      description: 'Trabalho com famílias para resolver conflitos e melhorar a dinâmica familiar.'
    },
    {
      image: '/images/servicos/terapiacarreira1.png',
      title: 'Orientação Profissional',
      description: 'Auxílio na escolha profissional e desenvolvimento de carreira.'
    },
    {
      image: '/images/servicos/terapiaansiedade1.png',
      title: 'Ansiedade e Estresse',
      description: 'Tratamento especializado para ansiedade, estresse e transtornos relacionados.'
    },
    {
      image: '/images/servicos/terapiadepressao1.png',
      title: 'Depressão',
      description: 'Acompanhamento terapêutico para tratamento da depressão e melhoria da qualidade de vida.'
    }
  ]

  return (
    <section id="servicos" className="servicos">
      {/* Efeitos decorativos de background */}
      <div className="servicos-background-effects">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
        <div className="bg-shape bg-shape-4"></div>
      </div>
      <div className="container">
        <h2 className="section-title section-title-center">Nossos Serviços</h2>
        <p className="servicos-subtitle">
          Oferecemos diferentes modalidades de atendimento para atender suas necessidades específicas
        </p>
        {/* Grid normal para desktop */}
        <div className="servicos-grid">
          {servicos.map((servico, index) => (
            <div key={index} className="servico-card">
              <div className="servico-image-wrapper">
                <img 
                  src={servico.image} 
                  alt={servico.title}
                  className="servico-image"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="servico-icon-placeholder" style={{ display: 'none' }}>
                  <span>📋</span>
                </div>
              </div>
              <h3 className="servico-title">{servico.title}</h3>
              <p className="servico-description">{servico.description}</p>
            </div>
          ))}
        </div>
        {/* Grid com scroll horizontal para mobile */}
        <div className="servicos-wrapper-mobile">
          <div className="servicos-grid-mobile">
            {servicos.map((servico, index) => (
              <div key={index} className="servico-card">
                <div className="servico-image-wrapper">
                  <img 
                    src={servico.image} 
                    alt={servico.title}
                    className="servico-image"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="servico-icon-placeholder" style={{ display: 'none' }}>
                    <span>📋</span>
                  </div>
                </div>
                <h3 className="servico-title">{servico.title}</h3>
                <p className="servico-description">{servico.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Servicos

