import { useEffect } from 'react'

/**
 * Añade la clase `visible` a los elementos con clase `reveal`
 * cuando entran en el viewport (animación de aparición).
 */
export function useReveal() {
  useEffect(() => {
    // Los anclajes (#proyectos, etc.) no existen hasta que React monta,
    // así que al abrir un enlace profundo hay que desplazarse manualmente.
    if (window.location.hash) {
      document
        .querySelector(window.location.hash)
        ?.scrollIntoView({ behavior: 'instant', block: 'start' })
    }

    const elements = Array.from(document.querySelectorAll('.reveal'))

    // Lo que ya está en pantalla se muestra de inmediato, sin esperar
    // al observer (evita secciones vacías al entrar por enlace profundo).
    for (const el of elements) {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible')
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15 },
    )

    for (const el of elements) {
      if (!el.classList.contains('visible')) {
        observer.observe(el)
      }
    }

    return () => observer.disconnect()
  }, [])
}
