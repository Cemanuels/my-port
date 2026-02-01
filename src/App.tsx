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
import type { LucideIcon } from 'lucide-react'
import type { SectionVisibility } from './types'
import type { SkillLevelKey } from './types'
import { useI18n } from './contexts/useI18n'
import { LanguageSwitcher } from './components/LanguageSwitcher'

const profilePhoto = 'https://github.com/Cemanuels.png'

function getLevelPercentage(levelKey: SkillLevelKey): number {
  switch (levelKey) {
    case 'beginner':
      return 33
    case 'intermediate':
      return 66
    case 'advanced':
      return 100
    default:
      return 0
  }
}

function getLevelColor(levelKey: SkillLevelKey): string {
  switch (levelKey) {
    case 'beginner':
      return 'var(--level-beginner)'
    case 'intermediate':
      return 'var(--level-intermediate)'
    case 'advanced':
      return 'var(--level-advanced)'
    default:
      return 'var(--primary-cyan)'
  }
}

const codingSkillIcons: LucideIcon[] = [
  Code,
  Code,
  Code,
  Code,
  Code,
  Code,
  Code,
]

const professionalSkillIcons: LucideIcon[] = [Cloud, Settings, Target, Settings]

const skillCardIcons: LucideIcon[] = [Code, Cloud, Settings, Database]

const hobbyIcons: LucideIcon[] = [Dumbbell, Gamepad2, Film, Tv, BookOpen]

function App() {
  const { t } = useI18n()
  const [isVisible, setIsVisible] = useState<SectionVisibility>({})
  const [isMobilePreview, setIsMobilePreview] = useState(false)

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
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

  const toggleMobilePreview = (): void => {
    const newState = !isMobilePreview
    setIsMobilePreview(newState)

    if (newState) {
      document.body.classList.add('mobile-preview-active')
    } else {
      document.body.classList.remove('mobile-preview-active')
    }
  }

  useEffect(() => {
    return () => {
      document.body.classList.remove('mobile-preview-active')
    }
  }, [])

  return (
    <div className={`page ${isMobilePreview ? 'mobile-preview' : ''}`}>
      <div className="bg-grid" />
      <nav className="navbar" role="navigation" aria-label={t.nav.ariaNav}>
        <div className="navbar-content">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('inicio')
            }}
            className="navbar-logo"
            aria-label={t.nav.goToHome}
          >
            {t.nav.logo}
          </a>
          <div className="navbar-right">
            <div className="navbar-links">
              <a
                href="#sobre"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('sobre')
                }}
              >
                <User size={18} />
                <span>{t.nav.about}</span>
              </a>
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('skills')
                }}
              >
                <Code size={18} />
                <span>{t.nav.skills}</span>
              </a>
              <a
                href="#experiencia"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('experiencia')
                }}
              >
                <Briefcase size={18} />
                <span>{t.nav.experience}</span>
              </a>
              <a
                href="#formacao"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('formacao')
                }}
              >
                <GraduationCap size={18} />
                <span>{t.nav.education}</span>
              </a>
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contato')
                }}
              >
                <Mail size={18} />
                <span>{t.nav.contact}</span>
              </a>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <header id="inicio" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">{t.hero.greeting}</div>
            <h1 className="hero-title">
              <span className="title-line">Caio</span>
              <span className="title-line">Emanuel</span>
            </h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <p className="hero-description">{t.hero.description}</p>
            <div className="hero-actions">
              <a
                className="button primary"
                href="mailto:c.emanuel_ufc@outook.com"
                aria-label={t.hero.emailAria}
              >
                <Briefcase size={20} />
                <span>{t.hero.hireMe}</span>
              </a>
              <a
                className="button secondary"
                href="#contato"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contato')
                }}
                aria-label={t.hero.goToContact}
              >
                <MessageCircle size={20} />
                <span>{t.hero.letsTalk}</span>
              </a>
            </div>
            <div className="hero-social">
              <a
                href="https://www.linkedin.com/in/caio-emanuel"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label={t.hero.linkedinAria}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Cemanuels"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label={t.hero.githubAria}
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img src={profilePhoto} alt={t.hero.imageAlt} />
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
          <h2 className="section-title">{t.about.title}</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>{t.about.paragraph1}</p>
            <p>{t.about.paragraph2}</p>
            <div className="about-stats">
              <div className="stat-item">
                <TrendingUp size={32} className="stat-icon" />
                <span className="stat-number">7+</span>
                <span className="stat-label">{t.about.statYears}</span>
              </div>
              <div className="stat-item">
                <Target size={32} className="stat-icon" />
                <span className="stat-number">50+</span>
                <span className="stat-label">{t.about.statProjects}</span>
              </div>
              <div className="stat-item">
                <Code size={32} className="stat-icon" />
                <span className="stat-number">15+</span>
                <span className="stat-label">{t.about.statTech}</span>
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
          <h2 className="section-title">{t.skills.title}</h2>
        </div>
        <div className="skills-container">
          <div className="skills-column">
            <h3 className="skills-category">{t.skills.codingCategory}</h3>
            <div className="skills-list">
              {t.skills.codingSkills.map((skill, index) => {
                const Icon = codingSkillIcons[index] ?? Code
                const levelKey = skill.levelKey as SkillLevelKey
                const percentage = getLevelPercentage(levelKey)
                const levelColor = getLevelColor(levelKey)
                const levelLabel = t.skills.levels[levelKey]
                return (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-name-wrapper">
                        <Icon size={18} className="skill-icon" />
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span
                        className={`skill-level skill-level-${skill.levelKey}`}
                      >
                        {levelLabel}
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: levelColor,
                        }}
                        aria-label={`${skill.name}: ${levelLabel}`}
                        role="progressbar"
                        aria-valuenow={percentage}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="skills-column">
            <h3 className="skills-category">
              {t.skills.professionalCategory}
            </h3>
            <div className="skills-list">
              {t.skills.professionalSkills.map((skill, index) => {
                const Icon = professionalSkillIcons[index] ?? Settings
                const levelKey = skill.levelKey as SkillLevelKey
                const percentage = getLevelPercentage(levelKey)
                const levelColor = getLevelColor(levelKey)
                const levelLabel = t.skills.levels[levelKey]
                return (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-name-wrapper">
                        <Icon size={18} className="skill-icon" />
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span
                        className={`skill-level skill-level-${skill.levelKey}`}
                      >
                        {levelLabel}
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: levelColor,
                        }}
                        aria-label={`${skill.name}: ${levelLabel}`}
                        role="progressbar"
                        aria-valuenow={percentage}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="skills-grid">
          {t.skills.cards.map((card, index) => {
            const Icon = skillCardIcons[index] ?? Code
            return (
              <div key={card.title} className="skill-card">
                <div className="skill-card-header">
                  <Icon size={24} className="skill-card-icon" />
                  <h3>{card.title}</h3>
                </div>
                <p>{card.items}</p>
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
          <h2 className="section-title">{t.experience.title}</h2>
        </div>
        <div className="journey-container">
          <div className="journey-column">
            <h3 className="journey-category">
              {t.experience.experienceCategory}
            </h3>
            <div className="journey-list">
              {t.experience.items.map((item) => (
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
            <h3 className="journey-category">
              {t.experience.educationCategory}
            </h3>
            <div className="journey-list">
              {t.education.items.map((item) => (
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
          <h2 className="section-title">{t.education.title}</h2>
        </div>
        <div className="education-grid">
          {t.education.items.map((item) => (
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
          <h2 className="section-title">{t.hobbies.title}</h2>
        </div>
        <div className="hobbies-grid">
          {t.hobbies.items.map((hobby, index) => {
            const Icon = hobbyIcons[index] ?? Film
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
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="muted">{t.contact.subtitle}</p>
        </div>
        <div className="contact-cards">
          <a
            href="mailto:c.emanuel_ufc@outlook.com"
            className="contact-card"
            aria-label={t.contact.emailAria}
          >
            <div className="contact-icon email">
              <Mail size={32} />
            </div>
            <h3>{t.contact.email}</h3>
            <p>c.emanuel_ufc@outlook.com</p>
            <span className="contact-action">{t.contact.sendEmail}</span>
          </a>

          <a
            href="https://wa.me/5585985112221"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
            aria-label={t.contact.whatsappAria}
          >
            <div className="contact-icon whatsapp">
              <MessageCircle size={32} />
            </div>
            <h3>{t.contact.whatsapp}</h3>
            <p>(85) 98511-2221</p>
            <span className="contact-action">{t.contact.whatsappAction}</span>
          </a>

          <a
            href="https://www.linkedin.com/in/caio-emanuel/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
            aria-label={t.contact.linkedinAria}
          >
            <div className="contact-icon linkedin">
              <Linkedin size={32} />
            </div>
            <h3>{t.contact.linkedin}</h3>
            <p>caio-emanuel</p>
            <span className="contact-action">{t.contact.linkedinAction}</span>
          </a>
        </div>
        <div className="footer-info">
          <p>{t.contact.footerRights}</p>
        </div>
      </footer>

      <button
        className="mobile-preview-toggle"
        onClick={toggleMobilePreview}
        aria-label={
          isMobilePreview ? t.common.mobilePreviewOn : t.common.mobilePreviewOff
        }
        title={
          isMobilePreview
            ? t.common.mobilePreviewTitleOn
            : t.common.mobilePreviewTitleOff
        }
      >
        {isMobilePreview ? <Monitor size={20} /> : <Smartphone size={20} />}
      </button>
    </div>
  )
}

export default App
