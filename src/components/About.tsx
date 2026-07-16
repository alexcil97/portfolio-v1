import { about } from '../data/profile'

export function About() {
  return (
    <section id="sobre-mi" className="section reveal">
      <div className="container">
        <p className="section-kicker">01. Sobre mí</p>
        <h2 className="section-title">Backend primero, full stack siempre</h2>
        <div className="about-grid">
          <div className="about-text">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <dl className="about-card">
            <h3>// datos rápidos</h3>
            {about.quickFacts.map((fact) => (
              <div key={fact.label} className="about-fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
