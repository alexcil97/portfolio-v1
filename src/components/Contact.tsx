import { profile } from '../data/profile'

export function Contact() {
  return (
    <section id="contacto" className="section contact reveal">
      <div className="container">
        <p className="section-kicker">04. Contacto</p>
        <h2 className="section-title">¿Hablamos?</h2>
        <p className="contact-text">
          Estoy {profile.availability.toLowerCase()}. Si buscas a alguien con base
          sólida en backend y capacidad para moverse por todo el stack, escríbeme
          y te respondo lo antes posible.
        </p>
        <div className="contact-actions">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            Enviar un email
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
