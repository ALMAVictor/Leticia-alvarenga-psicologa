import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import ComoFunciona from './components/ComoFunciona'
import Depoimentos from './components/Depoimentos'
import FAQ from './components/FAQ'
import AtendimentoOnline from './components/AtendimentoOnline'
import Contato from './components/Contato'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <ComoFunciona />
      <Depoimentos />
      <FAQ />
      <AtendimentoOnline />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App

