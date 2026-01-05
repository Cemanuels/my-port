# 🚀 Portfólio Pessoal - Caio Emanuel

Um portfólio moderno e responsivo desenvolvido com React, apresentando experiência profissional, habilidades técnicas, educação e informações de contato.

## ✨ Características

- 🎨 **Design Moderno**: Interface com glassmorphism, gradientes e animações suaves
- 📱 **Totalmente Responsivo**: Adaptável a todos os tamanhos de tela
- ♿ **Acessível**: Suporte a navegação por teclado, ARIA labels e preferências de contraste
- 🎭 **Animações Fluidas**: Transições e efeitos visuais modernos
- 📱 **Visualização Mobile**: Botão flutuante para preview mobile em desktop
- 🎯 **Navegação Suave**: Scroll suave entre seções
- 🎨 **Sistema de Ícones**: Integração com Lucide React para identidade visual consistente

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e dev server de alta performance
- **Lucide React** - Biblioteca de ícones SVG
- **CSS3** - Estilização com variáveis CSS, animações e media queries

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositório>
cd my-port
```

2. Instale as dependências:
```bash
npm install
```

## 🚀 Executando o Projeto

### Modo Desenvolvimento
```bash
npm run dev
```
Acesse `http://localhost:5173` no navegador.

### Build para Produção
```bash
npm run build
```
Os arquivos otimizados serão gerados na pasta `dist/`.

### Preview do Build
```bash
npm run preview
```
Visualize a versão de produção localmente.

### Linting
```bash
npm run lint
```
Verifica problemas de código com ESLint.

## 📁 Estrutura do Projeto

```
my-port/
├── public/              # Arquivos estáticos
├── src/
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos da aplicação
│   ├── index.css        # Estilos globais e variáveis CSS
│   └── main.jsx         # Ponto de entrada da aplicação
├── index.html           # HTML principal
├── package.json         # Dependências e scripts
└── vite.config.js       # Configuração do Vite
```

## 🎨 Seções do Portfólio

### 🏠 Hero
- Apresentação pessoal
- Foto de perfil
- Links para redes sociais (GitHub, LinkedIn)
- Botões de ação (CV, Contato)

### 👤 Sobre Mim
- Descrição profissional
- Estatísticas (Anos de experiência, Projetos, Tecnologias)

### 💻 Habilidades
- **Habilidades de Programação**: JavaScript, TypeScript, React, Node.js, Python
- **Habilidades Profissionais**: Arquitetura Cloud, Micro Front-ends, CI/CD, Design Systems
- Sistema de níveis: Iniciante, Intermediário, Avançado
- Barras de progresso animadas com efeito shimmer

### 💼 Experiência Profissional
- Timeline de experiências profissionais
- Detalhes de cada posição (empresa, período, responsabilidades)
- Ícones e badges visuais

### 🎓 Educação
- Formação acadêmica
- Cursos e certificações
- Localização e período

### 🎯 Hobbies
- Interesses pessoais
- Cards visuais com ícones

### 📧 Contato
- Links diretos para:
  - 📧 E-mail (mailto)
  - 💬 WhatsApp (API link)
  - 💼 LinkedIn (perfil)

## 🎨 Design System

### Cores Principais
- **Cyan Primário**: `#00d9ff` - Destaques e acentos
- **Fundo Escuro**: Gradientes com `#0a0e27` e `#1a1f3a`
- **Texto Primário**: `#ffffff`
- **Texto Secundário**: `#b4b9c8`

### Tipografia
- **Títulos**: Space Grotesk (Google Fonts)
- **Corpo**: Inter (Google Fonts)

### Efeitos Visuais
- Glassmorphism (backdrop-filter blur)
- Gradientes lineares e radiais
- Animações de fade-in e slide-up
- Efeito shimmer nas barras de progresso
- Hover effects com transformações

## 📱 Responsividade

O portfólio é totalmente responsivo com breakpoints:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Mobile Pequeno**: < 480px

## ♿ Acessibilidade

- Navegação por teclado
- ARIA labels em elementos interativos
- Suporte a `prefers-reduced-motion`
- Suporte a `prefers-contrast` (alto contraste)
- Focus states visíveis
- Estrutura semântica HTML

## 🎯 Funcionalidades Especiais

### Visualização Mobile
Botão flutuante no canto inferior direito permite visualizar o layout mobile em telas desktop, útil para testar a responsividade durante o desenvolvimento.

### Animações Baseadas em Scroll
As seções aparecem com animações suaves quando entram na viewport usando Intersection Observer API.

### Sistema de Níveis de Habilidade
As habilidades são categorizadas em três níveis:
- 🟡 **Iniciante**: 33% de progresso
- 🔵 **Intermediário**: 66% de progresso
- 🟢 **Avançado**: 100% de progresso

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o linter

## 🔧 Personalização

Para personalizar o portfólio com suas informações:

1. Edite `src/App.jsx`:
   - Atualize `profilePhoto` com sua foto
   - Modifique os arrays `codingSkills`, `professionalSkills`, `experience`, `education`, `hobbies`
   - Ajuste os links de contato em `contactLinks`

2. Ajuste as cores em `src/index.css`:
   - Modifique as variáveis CSS em `:root`

3. Personalize os textos e seções conforme necessário

## 📄 Licença

Este projeto é privado e pessoal.

## 👤 Autor

**Caio Emanuel**
- Email: c.emanuel_ufc@outlook.com
- LinkedIn: [linkedin.com/in/caio-emanuel](https://www.linkedin.com/in/caio-emanuel/)
- GitHub: [@Cemanuels](https://github.com/Cemanuels)

---

Desenvolvido com ❤️ usando React e Vite
