import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import ComoFunciona from './components/ComoFunciona'
import Depoimentos from './components/Depoimentos'
import FAQ from './components/FAQ'
import Localizacao from './components/Localizacao'
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
      <Localizacao />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App

