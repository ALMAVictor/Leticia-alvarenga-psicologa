# Site - Psicóloga Leticia

Landing page moderna e responsiva para a psicóloga Leticia, desenvolvida em React.

## 🚀 Tecnologias

- React 18
- Vite
- CSS3 (com variáveis CSS)

## 📦 Instalação

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse `http://localhost:5173` no seu navegador

## 🏗️ Build para Produção

Para criar uma build de produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

## 📁 Estrutura do Projeto

```
src/
  ├── components/
  │   ├── Hero.jsx          # Seção principal (hero)
  │   ├── Sobre.jsx         # Seção sobre a psicóloga
  │   ├── Servicos.jsx      # Seção de serviços
  │   ├── Contato.jsx       # Formulário de contato
  │   └── Footer.jsx        # Rodapé
  ├── App.jsx               # Componente principal
  ├── App.css
  ├── main.jsx              # Ponto de entrada
  └── index.css             # Estilos globais
```

## 🎨 Personalização

Você pode personalizar as cores e estilos editando as variáveis CSS em `src/index.css`:

```css
:root {
  --primary-color: #6B4E71;
  --secondary-color: #C8A2C8;
  --accent-color: #F5E6E8;
  /* ... */
}
```

## 📝 Próximos Passos

- Adicionar informações de contato reais
- Integrar formulário com serviço de email (ex: EmailJS, Formspree)
- Adicionar imagens reais
- Configurar domínio e hospedagem

## 📄 Licença

Este projeto é privado e destinado ao uso da Psicóloga Leticia.

