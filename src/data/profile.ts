export const profile = {
  name: 'Alex',
  role: 'Desarrollador Backend · Full Stack',
  tagline:
    'Diseño y construyo la lógica que hace funcionar las aplicaciones: APIs, servicios y bases de datos. Me muevo con soltura en el frontend con React, pero mi terreno es el backend.',
  location: 'España',
  availability: 'Abierto a nuevas oportunidades',
  email: 'alex@example.com', // TODO: email real
  github: 'https://github.com/alex', // TODO: usuario real
  linkedin: 'https://www.linkedin.com/in/alex', // TODO: perfil real
}

export const about = {
  paragraphs: [
    'Soy desarrollador con vocación clara por el backend: me interesa cómo se estructura una aplicación por dentro, cómo se modelan los datos y cómo se exponen a través de APIs limpias y bien documentadas.',
    'Trabajo con tres lenguajes de servidor: PHP, donde tengo mi base más sólida; Java con el ecosistema Spring; y Python con FastAPI para construir APIs modernas y rápidas.',
    'Aunque el backend es mi foco, disfruto del desarrollo full stack: con React puedo cerrar el círculo y llevar un proyecto desde la base de datos hasta la interfaz.',
  ],
  quickFacts: [
    { label: 'Foco', value: 'Backend' },
    { label: 'Perfil', value: 'Full Stack' },
    { label: 'Ubicación', value: profile.location },
    { label: 'Estado', value: profile.availability },
  ],
}

export type Skill = {
  name: string
  detail: string
  /** Nivel orientativo de 0 a 100 para la barra de progreso */
  level: number
}

export type SkillGroup = {
  title: string
  description: string
  highlight?: boolean
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    description: 'Mi especialidad: lógica de negocio, APIs y datos.',
    highlight: true,
    skills: [
      { name: 'PHP', detail: 'Base sólida · POO, APIs, integración con MySQL', level: 90 },
      { name: 'Java', detail: 'Spring · Spring Boot, servicios REST', level: 80 },
      { name: 'Python', detail: 'FastAPI · APIs asíncronas, Pydantic, OpenAPI', level: 80 },
    ],
  },
  {
    title: 'Frontend',
    description: 'Lo necesario para cerrar el círculo full stack.',
    skills: [
      { name: 'React', detail: 'Componentes, hooks, consumo de APIs', level: 75 },
      { name: 'JavaScript / TypeScript', detail: 'ES moderno, tipado', level: 70 },
      { name: 'HTML y CSS', detail: 'Maquetación responsive', level: 70 },
    ],
  },
  {
    title: 'Herramientas',
    description: 'El día a día alrededor del código.',
    skills: [
      { name: 'SQL', detail: 'MySQL · PostgreSQL, modelado y consultas', level: 80 },
      { name: 'Git y GitHub', detail: 'Control de versiones, flujo de ramas', level: 80 },
      { name: 'APIs REST', detail: 'Diseño, documentación y pruebas', level: 85 },
    ],
  },
]

export type Project = {
  title: string
  description: string
  stack: string[]
  repo?: string
  demo?: string
}

// TODO: sustituir por proyectos reales de Alex
export const projects: Project[] = [
  {
    title: 'API de gestión de tareas',
    description:
      'API REST construida con FastAPI: autenticación con JWT, validación con Pydantic, base de datos PostgreSQL y documentación automática con OpenAPI.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'JWT'],
    repo: 'https://github.com/alex/proyecto-fastapi',
  },
  {
    title: 'Servicio de pedidos',
    description:
      'Servicio backend con Spring Boot: capas bien separadas (controlador, servicio, repositorio), persistencia con JPA y tests de integración.',
    stack: ['Java', 'Spring Boot', 'JPA', 'MySQL'],
    repo: 'https://github.com/alex/proyecto-spring',
  },
  {
    title: 'Plataforma de reservas',
    description:
      'Aplicación web en PHP con arquitectura MVC: gestión de usuarios, panel de administración y consultas optimizadas sobre MySQL.',
    stack: ['PHP', 'MVC', 'MySQL'],
    repo: 'https://github.com/alex/proyecto-php',
  },
  {
    title: 'Dashboard de administración',
    description:
      'Frontend en React que consume una API propia: rutas protegidas, gráficas de actividad y gestión de estado con hooks.',
    stack: ['React', 'TypeScript', 'API REST'],
    repo: 'https://github.com/alex/proyecto-react',
  },
]

export const navLinks = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]
