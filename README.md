# Portfolio de Alex

Portfolio personal de una sola página construido con **React + TypeScript + Vite**.
Perfil: desarrollador **backend** (PHP, Java/Spring, Python/FastAPI) con capacidad **full stack** (React).

## Comandos

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo (http://localhost:5173)
npm run build   # build de producción en dist/
npm run preview # previsualizar el build
```

## Personalizar el contenido

**Todo el contenido editable está en un solo archivo: [`src/data/profile.ts`](src/data/profile.ts).**

Ahí puedes cambiar:

- `profile` — nombre, email, GitHub, LinkedIn, ubicación y disponibilidad (los enlaces actuales son de ejemplo, marcados con `TODO`).
- `about` — los párrafos de "Sobre mí" y los datos rápidos.
- `skillGroups` — tecnologías, descripción y nivel (0–100) de cada barra.
- `projects` — los proyectos son de ejemplo; sustitúyelos por los reales con sus enlaces a repositorio (`repo`) y demo (`demo`, opcional).
- `navLinks` — enlaces del menú de navegación.

## Personalizar el diseño

Los colores y fuentes están definidos como variables CSS al inicio de
[`src/index.css`](src/index.css) (`--accent`, `--bg`, `--card`, etc.).
Cambiando `--accent` se recolorea todo el sitio.

## Estructura

```
src/
├── data/profile.ts      # contenido (edita esto)
├── components/          # una sección por componente
│   ├── Navbar.tsx
│   ├── Hero.tsx         # portada con terminal decorativa
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── hooks/useReveal.ts   # animación de aparición al hacer scroll
├── index.css            # tema y estilos
└── App.tsx
```

## Despliegue

El build genera archivos estáticos en `dist/`, listos para
**Vercel**, **Netlify** o **GitHub Pages** (para Pages, define `base` en `vite.config.ts`).
