import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          Diseñado y construido por{' '}
          <a href={profile.github} target="_blank" rel="noreferrer">
            {profile.name}
          </a>{' '}
          · React + TypeScript
        </p>
      </div>
    </footer>
  )
}
