import { useState, useEffect } from 'react'
import './App.css'
import {
  User,
  Code,
  Briefcase,
  GraduationCap,
  Mail,
  Linkedin,
  Github,
  MessageCircle,
  Award,
  TrendingUp,
  Database,
  Cloud,
  Settings,
  Target,
  Film,
  Tv,
  BookOpen,
  Gamepad2,
  Dumbbell,
  Calendar,
  MapPin,
  Smartphone,
  Monitor,
} from 'lucide-react'

const profilePhoto = 'https://github.com/Cemanuels.png'

const codingSkills = [
  { name: 'JavaScript', level: 'avançado', icon: Code },
  { name: 'TypeScript', level: 'avançado', icon: Code },
  { name: 'React/Next.js', level: 'avançado', icon: Code },
  { name: 'React Native', level: 'avançado', icon: Code },
  { name: 'Node.js/NestJS', level: 'avançado', icon: Code },
  { name: 'Python', level: 'intermediário', icon: Code },
]

const professionalSkills = [
  { name: 'Arquitetura Cloud', level: 'avançado', icon: Cloud },
  { name: 'Micro Front-ends', level: 'avançado', icon: Settings },
  { name: 'CI/CD Pipelines', level: 'avançado', icon: Target },
  { name: 'Design Systems', level: 'avançado', icon: Settings },
]

// Função helper para converter nível em percentual para a barra
const getLevelPercentage = (level) => {
  switch (level) {
    case 'iniciante':
      return 33
    case 'intermediário':
      return 66
    case 'avançado':
      return 100
    default:
      return 0
  }
}

// Função helper para obter a cor do nível
const getLevelColor = (level) => {
  switch (level) {
    case 'iniciante':
      return 'var(--level-beginner)'
    case 'intermediário':
      return 'var(--level-intermediate)'
    case 'avançado':
      return 'var(--level-advanced)'
    default:
      return 'var(--primary-cyan)'
  }
}

const skills = [
  {
    title: 'Linguagens & Frameworks',
    items:
      'JavaScript · TypeScript · ReactJS · NextJS · React Native · AngularJS · NodeJS · NestJS · Python',
    icon: Code,
  },
  {
    title: 'Cloud & DevOps',
    items:
      'AWS · Azure · Docker · Kubernetes · OpenShift · CI/CD (GitHub Actions, GitLab CI, Azure DevOps, Bamboo)',
    icon: Cloud,
  },
  {
    title: 'Arquitetura & Observabilidade',
    items: 'Micro front-ends (Single-SPA) · Kafka · RabbitMQ · Prometheus · Grafana · Design Systems',
    icon: Settings,
  },
  {
    title: 'Bancos de Dados',
    items: 'PostgreSQL · MongoDB · DynamoDB · SQL',
    icon: Database,
  },
]

const experience = [
  {
    company: "Fiserv (LATAM)",
    role: 'Desenvolvedor Full Stack Sênior',
    period: '2024.1 – Atual',
    highlights: [
      'Desenvolvimento de interfaces front-end em AngularJS para plataforma de chat e gerenciamento baseada em IA',
      'Desenvolvimento de serviços back-end em Java Spring Boot para criação de API seguindo a arquitetura BFF (Backend for Frontend)',
      'Desenvolvimento de serviços back-end em Python utilizando Azure Functions para criação de APIs de IA baseadas em LLMs e processamento vetorial',
      'Contribuição para soluções escaláveis e cloud-native utilizando Microsoft Azure',
    ],
  },
  {
    company: 'Coterie (Canadá)',
    role: 'Desenvolvedor Full Stack Sênior',
    period: '2022.1 – 2024.1',
    highlights: [
      'Desenvolvimento e manutenção de aplicações front-end em ReactJScom foco em performance e escalabilidade',
      'Definição e implementação de arquitetura back-end utilizando NestJS, incluindo autenticação (Auth0), WebSockets (Socket.IO) e testes unitários com Jest',
      'Gestão da infraestrutura em AWS para ambientes de desenvolvimento e produção, incluindo DynamoDB e CloudSearch',
      'Integração de soluções de IA (ChatGPT) para aprimoramento de mecanismos de busca e recomendações de locais esportivos com base no feedback dos usuários',
    ],
  },
  {
    company: 'Riachuelo',
    role: 'Desenvolvedor Full Stack Pleno',
    period: '2021.1 – 2022.1',
    highlights: [
      'Criação do design system GENOS garantindo consistência visual',
      'Pipelines de deploy e foco em acessibilidade para mobile',
    ],
  },
  {
    company: '123Milhas',
    role: 'Desenvolvedor Full Stack Pleno',
    period: '2020 – 2021.1',
    highlights: [
      'Micro front-ends (Single-SPA) em React Native para escala',
      'APIs em Node.js otimizadas para volume e resiliência',
    ],
  },
  {
    company: 'IBM',
    role: 'Desenvolvedor Full Stack Júnior',
    period: '2020 – 2021.1',
    highlights: ['Site IBM Brasil em ReactJS + Node.js com foco em performance'],
  },
  {
    company: 'HP',
    role: 'Estagiário em React Native',
    period: '06/2018 – 11/2019',
    highlights: ['Implementação, estilização e correção de bugs em apps móveis'],
  },
]

const education = [
  {
    course: 'Graduação em Matemática Computacional',
    place: 'Universidade Federal do Ceará (UFC)',
    notes: 'Menção Honrosa Maratona de Programação (2019)',
  },
  {
    course: 'Ensino Médio',
    place: 'Organização Educacional Farias Brito',
    notes: 'Medalha de Ouro Olimpíada Canguru de Matemática; Menções em Física e Robótica',
  },
]

const hobbies = [
  { name: 'Esportes', icon: Dumbbell },
  { name: 'Jogos virtuais', icon: Gamepad2 },
  { name: 'Filmes', icon: Film },
  { name: 'Séries', icon: Tv },
  { name: 'Literatura de ficção', icon: BookOpen },
]

function App() {
  const [isVisible, setIsVisible] = useState({})
  const [isMobilePreview, setIsMobilePreview] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('section, header, footer')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])


  const toggleMobilePreview = () => {
    const newState = !isMobilePreview
    setIsMobilePreview(newState)
    
    // Adiciona/remove classe no body para controlar overlay
    if (newState) {
      document.body.classList.add('mobile-preview-active')
    } else {
      document.body.classList.remove('mobile-preview-active')
    }
  }

  // Limpa a classe ao desmontar
  useEffect(() => {
    return () => {
      document.body.classList.remove('mobile-preview-active')
    }
  }, [])

  return (
    <div className={`page ${isMobilePreview ? 'mobile-preview' : ''}`}>
      <div className="bg-grid" />
      <nav className="navbar" role="navigation" aria-label="Navegação principal">
        <div className="navbar-content">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('inicio')
            }}
            className="navbar-logo"
            aria-label="Ir para o início"
          >
            Caio Emanuel
          </a>
          <div className="navbar-links">
            <a
              href="#sobre"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('sobre')
              }}
            >
              <User size={18} />
              <span>Sobre</span>
            </a>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('skills')
              }}
            >
              <Code size={18} />
              <span>Skills</span>
            </a>
            <a
              href="#experiencia"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('experiencia')
              }}
            >
              <Briefcase size={18} />
              <span>Experiência</span>
            </a>
            <a
              href="#formacao"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('formacao')
              }}
            >
              <GraduationCap size={18} />
              <span>Formação</span>
            </a>
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contato')
              }}
            >
              <Mail size={18} />
              <span>Contato</span>
            </a>
          </div>
        </div>
      </nav>

      <header id="inicio" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">Olá, eu sou</div>
            <h1 className="hero-title">
              <span className="title-line">Caio</span>
              <span className="title-line">Emanuel</span>
            </h1>
            <p className="hero-subtitle">Engenheiro de Software Sênior</p>
            <p className="hero-description">
              Especialista em ecossistema JavaScript construindo produtos escaláveis em fintech,
              e-commerce e IA. Forte em arquiteturas cloud-native, micro front-ends e esteiras
              CI/CD.
            </p>
            <div className="hero-actions">
              <a
                className="button primary"
                href="mailto:c.emanuel_ufc@outook.com"
                aria-label="Enviar e-mail para Caio Emanuel"
              >
                <Briefcase size={20} />
                <span>Contrate-me</span>
              </a>
              <a
                className="button secondary"
                href="#contato"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contato')
                }}
                aria-label="Ir para seção de contato"
              >
                <MessageCircle size={20} />
                <span>Vamos conversar</span>
              </a>
            </div>
            <div className="hero-social">
              <a
                href="https://www.linkedin.com/in/caio-emanuel"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="LinkedIn de Caio Emanuel"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Cemanuels"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="GitHub de Caio Emanuel"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img src={profilePhoto} alt="Caio Emanuel - Engenheiro de Software" />
              <div className="glow-lines">
                <div className="glow-line line-1"></div>
                <div className="glow-line line-2"></div>
                <div className="glow-line line-3"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section
        id="sobre"
        className={`section about-section ${isVisible.sobre ? 'visible' : ''}`}
      >
        <div className="section-header">
          <h2 className="section-title">Sobre Mim</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              Com mais de 7 anos de experiência em desenvolvimento full stack e mobile, atuo na
              construção de aplicações escaláveis nos setores de fintech, e-commerce e IA.
              Especialista em ecossistema JavaScript, arquiteturas cloud-native, CI/CD e design
              systems.
            </p>
            <p>
              Minha paixão está em transformar ideias complexas em soluções elegantes e escaláveis,
              sempre priorizando qualidade de código, performance e experiência do usuário.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <TrendingUp size={32} className="stat-icon" />
                <span className="stat-number">7+</span>
                <span className="stat-label">Anos de Experiência</span>
              </div>
              <div className="stat-item">
                <Target size={32} className="stat-icon" />
                <span className="stat-number">50+</span>
                <span className="stat-label">Projetos Entregues</span>
              </div>
              <div className="stat-item">
                <Code size={32} className="stat-icon" />
                <span className="stat-number">15+</span>
                <span className="stat-label">Tecnologias Dominadas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className={`section skills-section ${isVisible.skills ? 'visible' : ''}`}
      >
        <div className="section-header">
          <h2 className="section-title">Minhas Skills</h2>
        </div>
        <div className="skills-container">
          <div className="skills-column">
            <h3 className="skills-category">Coding Skills</h3>
            <div className="skills-list">
              {codingSkills.map((skill) => {
                const Icon = skill.icon
                const percentage = getLevelPercentage(skill.level)
                const levelColor = getLevelColor(skill.level)
                return (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-name-wrapper">
                        <Icon size={18} className="skill-icon" />
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className={`skill-level skill-level-${skill.level}`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: levelColor,
                        }}
                        aria-label={`${skill.name}: ${skill.level}`}
                        role="progressbar"
                        aria-valuenow={percentage}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="skills-column">
            <h3 className="skills-category">Professional Skills</h3>
            <div className="skills-list">
              {professionalSkills.map((skill) => {
                const Icon = skill.icon
                const percentage = getLevelPercentage(skill.level)
                const levelColor = getLevelColor(skill.level)
                return (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-name-wrapper">
                        <Icon size={18} className="skill-icon" />
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className={`skill-level skill-level-${skill.level}`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: levelColor,
                        }}
                        aria-label={`${skill.name}: ${skill.level}`}
                        role="progressbar"
                        aria-valuenow={percentage}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div key={skill.title} className="skill-card">
                <div className="skill-card-header">
                  <Icon size={24} className="skill-card-icon" />
                  <h3>{skill.title}</h3>
                </div>
                <p>{skill.items}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section
        id="experiencia"
        className={`section experience-section ${isVisible.experiencia ? 'visible' : ''}`}
      >
        <div className="section-header">
          <h2 className="section-title">Minha Jornada</h2>
        </div>
        <div className="journey-container">
          <div className="journey-column">
            <h3 className="journey-category">Experiência</h3>
            <div className="journey-list">
              {experience.map((item) => (
                <div key={item.company} className="journey-item">
                  <div className="journey-date">
                    <Calendar size={16} />
                    <span>{item.period}</span>
                  </div>
                  <div className="journey-content">
                    <h4>
                      <Briefcase size={20} className="journey-icon" />
                      {item.role}
                    </h4>
                    <p className="journey-company">
                      <MapPin size={16} />
                      {item.company}
                    </p>
                    <ul>
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>
                          <Award size={14} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="journey-column">
            <h3 className="journey-category">Educação</h3>
            <div className="journey-list">
              {education.map((item) => (
                <div key={item.course} className="journey-item">
                  <div className="journey-content">
                    <h4>
                      <GraduationCap size={20} className="journey-icon" />
                      {item.course}
                    </h4>
                    <p className="journey-company">
                      <MapPin size={16} />
                      {item.place}
                    </p>
                    <p>
                      <Award size={14} />
                      {item.notes}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="formacao"
        className={`section education-section ${isVisible.formacao ? 'visible' : ''}`}
      >
        <div className="section-header">
          <h2 className="section-title">Formação Acadêmica</h2>
        </div>
        <div className="education-grid">
          {education.map((item) => (
            <div key={item.course} className="education-card">
              <GraduationCap size={40} className="education-icon" />
              <h3>{item.course}</h3>
              <p className="education-place">
                <MapPin size={16} />
                {item.place}
              </p>
              <p className="education-notes">
                <Award size={16} />
                {item.notes}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="hobbies"
        className={`section hobbies-section ${isVisible.hobbies ? 'visible' : ''}`}
      >
        <div className="section-header">
          <h2 className="section-title">Hobbies & Interesses</h2>
        </div>
        <div className="hobbies-grid">
          {hobbies.map((hobby) => {
            const Icon = hobby.icon
            return (
              <div key={hobby.name} className="hobby-card">
                <Icon size={32} className="hobby-icon" />
                <span>{hobby.name}</span>
              </div>
            )
          })}
        </div>
      </section>

      <footer id="contato" className={`footer ${isVisible.contato ? 'visible' : ''}`}>
        <div className="section-header">
          <h2 className="section-title">Entre em Contato!</h2>
          <p className="muted">Escolha a melhor forma de entrar em contato comigo</p>
        </div>
        <div className="contact-cards">
          <a
            href="mailto:c.emanuel_ufc@outlook.com"
            className="contact-card"
            aria-label="Enviar e-mail para Caio Emanuel"
          >
            <div className="contact-icon email">
              <Mail size={32} />
            </div>
            <h3>E-mail</h3>
            <p>c.emanuel_ufc@outlook.com</p>
            <span className="contact-action">Enviar e-mail</span>
          </a>

          <a
            href="https://wa.me/5585985112221"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
            aria-label="Abrir conversa no WhatsApp"
          >
            <div className="contact-icon whatsapp">
              <MessageCircle size={32} />
            </div>
            <h3>WhatsApp</h3>
            <p>(85) 98511-2221</p>
            <span className="contact-action">Conversar no WhatsApp</span>
          </a>

          <a
            href="https://www.linkedin.com/in/caio-emanuel/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
            aria-label="Visitar perfil no LinkedIn"
          >
            <div className="contact-icon linkedin">
              <Linkedin size={32} />
            </div>
            <h3>LinkedIn</h3>
            <p>caio-emanuel</p>
            <span className="contact-action">Visitar perfil</span>
          </a>
        </div>
        <div className="footer-info">
          <p>© 2024 Caio Emanuel. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Botão flutuante para visualização mobile */}
      <button
        className="mobile-preview-toggle"
        onClick={toggleMobilePreview}
        aria-label={isMobilePreview ? 'Voltar para visualização desktop' : 'Visualizar em modo mobile'}
        title={isMobilePreview ? 'Voltar para desktop' : 'Visualizar mobile'}
      >
        {isMobilePreview ? <Monitor size={20} /> : <Smartphone size={20} />}
      </button>
    </div>
  )
}

export default App
