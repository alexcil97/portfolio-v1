import { profile } from '../data/profile'

const mainStack = ['PHP', 'Java · Spring', 'Python · FastAPI', 'React']

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="hero-kicker">Hola, soy</p>
          <h1 className="hero-title">{profile.name}</h1>
          <p className="hero-role">
            Desarrollador <strong>Backend</strong> · Full Stack
          </p>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a href="#proyectos" className="btn btn-primary">
              Ver proyectos
            </a>
            <a href="#contacto" className="btn btn-ghost">
              Contactar
            </a>
          </div>
          <div className="hero-chips">
            {mainStack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="terminal" aria-hidden="true">
          <div className="terminal-bar">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot green" />
            <span className="terminal-title">main.py — FastAPI</span>
          </div>
          <pre className="terminal-body">
            <code>
              <span className="t-keyword">from</span>{' '}
              <span className="t-plain">fastapi</span>{' '}
              <span className="t-keyword">import</span>{' '}
              <span className="t-plain">FastAPI</span>
              {'\n\n'}
              <span className="t-plain">app = </span>
              <span className="t-fn">FastAPI</span>
              <span className="t-plain">(title=</span>
              <span className="t-string">"alex.dev"</span>
              <span className="t-plain">)</span>
              {'\n\n'}
              <span className="t-plain">@app.</span>
              <span className="t-fn">get</span>
              <span className="t-plain">(</span>
              <span className="t-string">"/perfil"</span>
              <span className="t-plain">)</span>
              {'\n'}
              <span className="t-keyword">async def</span>{' '}
              <span className="t-fn">perfil</span>
              <span className="t-plain">():</span>
              {'\n'}
              <span className="t-plain">    </span>
              <span className="t-keyword">return</span>{' '}
              <span className="t-plain">{'{'}</span>
              {'\n'}
              <span className="t-plain">        </span>
              <span className="t-string">"backend"</span>
              <span className="t-plain">: [</span>
              <span className="t-string">"PHP"</span>
              <span className="t-plain">, </span>
              <span className="t-string">"Java"</span>
              <span className="t-plain">, </span>
              <span className="t-string">"Python"</span>
              <span className="t-plain">],</span>
              {'\n'}
              <span className="t-plain">        </span>
              <span className="t-string">"frontend"</span>
              <span className="t-plain">: [</span>
              <span className="t-string">"React"</span>
              <span className="t-plain">],</span>
              {'\n'}
              <span className="t-plain">        </span>
              <span className="t-string">"pasión"</span>
              <span className="t-plain">: </span>
              <span className="t-string">"construir cosas"</span>
              {'\n'}
              <span className="t-plain">    {'}'}</span>
              {'\n\n'}
              <span className="t-comment"># uvicorn main:app --reload ✓</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
