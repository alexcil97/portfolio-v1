import type { ReactNode } from 'react'
import { about, profile } from '../data/profile'
import alexPhoto from '../assets/alex.jpg'

/** Términos técnicos que se resaltan dentro de los párrafos */
const HIGHLIGHTS = [
  'MyDance',
  '.NET 7',
  'Entity Framework Core',
  'PHP',
  'Java con Spring',
  'Python con FastAPI',
  'React',
  'Next.js',
  'Netgram',
  'Docker',
  'Git',
  'SQL',
  'CFGS de Desarrollo de Aplicaciones Multiplataforma',
]

const HIGHLIGHT_PATTERN = new RegExp(
  `(${HIGHLIGHTS.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
  'g',
)

function highlight(text: string): ReactNode[] {
  return text
    .split(HIGHLIGHT_PATTERN)
    .map((part, i) =>
      HIGHLIGHTS.includes(part) ? (
        <span key={`${part}-${i}`} className="hl">
          {part}
        </span>
      ) : (
        part
      ),
    )
}

export function About() {
  return (
    <section id="sobre-mi" className="section reveal">
      <div className="container">
        <p className="section-kicker">01. Sobre mí</p>
        <h2 className="section-title">Backend primero, full stack siempre</h2>
        <div className="about-grid">
          <div className="about-photo-col reveal-item" style={{ animationDelay: '120ms' }}>
            <figure className="about-photo">
              <img src={alexPhoto} alt={`Foto de ${profile.fullName}`} />
              <figcaption className="about-photo-tag">
                <span className="prompt">$</span> whoami
                <span className="out"> → backend dev</span>
              </figcaption>
            </figure>
          </div>
          <div className="about-text">
            {about.paragraphs.map((paragraph, i) => (
              <p
                key={paragraph.slice(0, 24)}
                className="reveal-item"
                style={{ animationDelay: `${i * 130}ms` }}
              >
                {highlight(paragraph)}
              </p>
            ))}
            <dl className="about-facts">
              {about.quickFacts.map((fact, i) => (
                <div
                  key={fact.label}
                  className="about-fact reveal-item"
                  style={{ animationDelay: `${380 + i * 70}ms` }}
                >
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
