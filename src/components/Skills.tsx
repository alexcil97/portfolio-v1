import type { CSSProperties } from 'react'
import { skillGroups } from '../data/profile'

export function Skills() {
  return (
    <section id="habilidades" className="section reveal">
      <div className="container">
        <p className="section-kicker">02. Habilidades</p>
        <h2 className="section-title">Tecnologías con las que trabajo</h2>
        <div className="skills-grid">
          {skillGroups.map((group, groupIndex) => (
            <div
              key={group.title}
              className={`skill-group reveal-item${group.highlight ? ' highlight' : ''}`}
              style={{ animationDelay: `${groupIndex * 130}ms` }}
            >
              <h3 className="skill-group-title">{group.title}</h3>
              <p className="skill-group-desc">{group.description}</p>
              {group.skills.map((skill, skillIndex) => (
                <div key={skill.name} className="skill">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-detail">{skill.detail}</div>
                  <div
                    className="skill-bar"
                    role="progressbar"
                    aria-label={`Nivel de ${skill.name}`}
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="skill-bar-fill"
                      style={
                        {
                          '--level': `${skill.level}%`,
                          transitionDelay: `${200 + groupIndex * 130 + skillIndex * 100}ms`,
                        } as CSSProperties
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
