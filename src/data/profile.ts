// ============================================================
// Todo el contenido del portfolio se edita en este archivo.
// Datos extraídos del CV (public/CV_Alejandro_Cil_Backend_Junior.docx).
// ============================================================

export const profile = {
  name: 'Alex',
  displayName: 'Alejandro Cil',
  fullName: 'Alejandro Cil Jiménez',
  role: 'Desarrollador Backend · Full Stack',
  tagline:
    'Diseño y construyo la lógica que hace funcionar las aplicaciones: APIs, servicios y bases de datos. Me muevo con soltura en el frontend con React, pero mi terreno es el backend.',
  location: 'Madrid, España',
  availability: 'Abierto a nuevas oportunidades',
  email: 'alex.cjdev@gmail.com',
  github: 'https://github.com/alexcil97',
  linkedin: 'https://www.linkedin.com/in/alex-cil-jim',
  /** Archivo del CV dentro de public/, descargable desde la web */
  cvFile: '/CV_Alejandro_Cil_Backend_Junior.docx',
}

export const about = {
  paragraphs: [
    'Soy Alejandro Cil —Alex—, desarrollador backend de Madrid. Me interesa cómo se estructura una aplicación por dentro: el modelado de los datos, la lógica de negocio y las APIs que lo exponen todo de forma limpia y bien documentada.',
    'He trabajado profesionalmente en el backend de MyDance, una red social profesional, con .NET 7 y Entity Framework Core sobre SQL, en un equipo multidisciplinar con Docker y Git. Además trabajo con PHP —mi base más sólida—, Java con Spring y Python con FastAPI.',
    'Aunque el backend es mi foco, disfruto del desarrollo full stack: con React y Next.js he llevado proyectos propios como Netgram hasta producción. Actualmente sigo creciendo mientras curso el CFGS de Desarrollo de Aplicaciones Multiplataforma.',
  ],
  quickFacts: [
    { label: 'Foco', value: 'Backend' },
    { label: 'Perfil', value: 'Full Stack' },
    { label: 'Ubicación', value: profile.location },
    { label: 'Formación', value: 'CFGS DAM (en curso)' },
    { label: 'Idiomas', value: 'Español · Inglés (B1)' },
    { label: 'Estado', value: 'Disponible' },
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
      { name: 'C#', detail: '.NET 7 · ASP.NET MVC, EF Core — experiencia profesional', level: 75 },
    ],
  },
  {
    title: 'Frontend',
    description: 'Lo necesario para cerrar el círculo full stack.',
    skills: [
      { name: 'React', detail: 'Componentes, hooks, consumo de APIs', level: 75 },
      { name: 'TypeScript / JavaScript', detail: 'ES moderno, tipado · Next.js', level: 70 },
      { name: 'HTML y CSS', detail: 'Maquetación responsive, semántica y accesible', level: 70 },
    ],
  },
  {
    title: 'Herramientas',
    description: 'El día a día alrededor del código.',
    skills: [
      { name: 'Docker', detail: 'Contenerización de entornos en proyectos reales', level: 75 },
      { name: 'SQL', detail: 'MySQL · PostgreSQL · EF Core, Prisma ORM', level: 80 },
      { name: 'Git y GitHub', detail: 'Control de versiones y trabajo en equipo', level: 80 },
      { name: 'APIs REST', detail: 'Diseño y pruebas · Swagger, Postman', level: 85 },
    ],
  },
]

export type Project = {
  title: string
  description: string
  stack: string[]
  period?: string
  repo?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: 'Netgram',
    description:
      'Red social full-stack desarrollada de principio a fin: TypeScript y Next.js, base de datos relacional modelada con Prisma ORM y despliegue en producción en Vercel.',
    stack: ['TypeScript', 'Next.js', 'Prisma', 'Vercel'],
    period: 'Mar – Jun 2024',
  },
  {
    title: 'Curso de Python',
    description:
      'Curso estructurado de Python orientado a la lógica de programación, con proyectos prácticos progresivos y ejercicios diseñados para facilitar el aprendizaje autónomo.',
    stack: ['Python', 'Docencia'],
    period: 'Feb – Abr 2025',
  },
  {
    title: 'Portfolio personal',
    description:
      'Web responsiva con HTML5 y CSS3, con estructura semántica optimizada para buscadores y accesibilidad.',
    stack: ['HTML5', 'CSS3', 'SEO'],
    period: 'Ene 2025',
  },
]

export type TimelineItem = {
  title: string
  place: string
  period?: string
  bullets?: string[]
  tags?: string[]
}

export const experience: TimelineItem[] = [
  {
    title: 'Desarrollador Web Backend',
    place: 'MyDance · Red social profesional',
    period: 'Mar 2024 – Jun 2024',
    bullets: [
      'Desarrollo y mantenimiento del backend con .NET 7 (ASP.NET MVC) y Entity Framework Core sobre base de datos SQL.',
      'Diseño del modelo de datos y de la lógica de negocio, asegurando la integración con el frontend.',
      'Contenerización del entorno con Docker y control de versiones con Git en equipo.',
      'Diseño y ejecución de pruebas funcionales de los endpoints con Swagger y Postman.',
      'Colaboración con desarrolladores y diseñadores en un equipo multidisciplinar.',
    ],
    tags: ['.NET 7', 'EF Core', 'SQL', 'Docker', 'Git'],
  },
]

export const education: TimelineItem[] = [
  {
    title: 'CFGS · Desarrollo de Aplicaciones Multiplataforma (DAM)',
    place: 'Centro Gabriel García Márquez, Madrid',
    period: '2025 – actualidad',
  },
  {
    title: 'CFGS · Desarrollo de Aplicaciones Web (DAW)',
    place: 'Centro Enrique Tierno Galván, Madrid',
  },
  {
    title: 'CFGS · Mantenimiento Electrónico y Robótica',
    place: 'Centro Julio Verne, Leganés',
  },
]

export const navLinks = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Trayectoria', href: '#trayectoria' },
  { label: 'Contacto', href: '#contacto' },
]
