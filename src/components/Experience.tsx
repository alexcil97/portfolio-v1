import { education, experience } from '../data/profile'
import type { TimelineItem } from '../data/profile'

function Timeline({ items, offset = 0 }: { items: TimelineItem[]; offset?: number }) {
  return (
    <ol className="timeline">
      {items.map((item, i) => (
        <li
          key={item.title}
          className="timeline-item reveal-item"
          style={{ animationDelay: `${(offset + i) * 120}ms` }}
        >
          <div className="timeline-header">
            <h4 className="timeline-title">{item.title}</h4>
            {item.period && <span className="timeline-period">{item.period}</span>}
          </div>
          <p className="timeline-place">{item.place}</p>
          {item.bullets && (
            <ul className="timeline-bullets">
              {item.bullets.map((bullet) => (
                <li key={bullet.slice(0, 24)}>{bullet}</li>
              ))}
            </ul>
          )}
          {item.tags && (
            <div className="timeline-tags">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}
        </li>
      ))}
    </ol>
  )
}

export function Experience() {
  return (
    <section id="trayectoria" className="section reveal">
      <div className="container">
        <p className="section-kicker">04. Trayectoria</p>
        <h2 className="section-title">Experiencia y formación</h2>
        <div className="timeline-grid">
          <div>
            <h3 className="timeline-heading">Experiencia profesional</h3>
            <Timeline items={experience} />
          </div>
          <div>
            <h3 className="timeline-heading">Formación académica</h3>
            <Timeline items={education} offset={1} />
          </div>
        </div>
      </div>
    </section>
  )
}
