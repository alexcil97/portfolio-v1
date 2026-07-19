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

- `profile` — nombre, email, GitHub, LinkedIn, ubicación, disponibilidad y ruta del CV.
- `about` — los párrafos de "Sobre mí" y los datos rápidos.
- `skillGroups` — tecnologías, descripción y nivel (0–100) de cada barra.
- `projects` — proyectos con su periodo y enlaces opcionales a repositorio (`repo`) y demo (`demo`).
- `experience` y `education` — la línea de tiempo de la sección Trayectoria.
- `navLinks` — enlaces del menú de navegación.

La foto está en `src/assets/alex.jpg` y el CV descargable en
`public/CV_Alejandro_Cil_Backend_Junior.docx`. Los proyectos aún no tienen
enlace a repositorio: añade `repo`/`demo` cuando estén publicados.

## Personalizar el diseño

Los colores y fuentes están definidos como variables CSS al inicio de
[`src/index.css`](src/index.css) (`--accent`, `--bg`, `--card`, etc.).
Cambiando `--accent` se recolorea todo el sitio.

## Estructura

```
src/
├── data/profile.ts      # contenido (edita esto)
├── assets/alex.jpg      # foto (optimizada para web)
├── components/          # una sección por componente
│   ├── Navbar.tsx
│   ├── Hero.tsx         # portada con terminal decorativa
│   ├── About.tsx        # foto + texto con resaltados + datos rápidos
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx   # trayectoria: experiencia + formación
│   ├── Contact.tsx
│   └── Footer.tsx
├── hooks/useReveal.ts   # animación de aparición al hacer scroll
├── index.css            # tema, animaciones y estilos
└── App.tsx
```

## Despliegue

El build genera archivos estáticos en `dist/`, listos para
**Vercel**, **Netlify** o **GitHub Pages** (para Pages, define `base` en `vite.config.ts`).
