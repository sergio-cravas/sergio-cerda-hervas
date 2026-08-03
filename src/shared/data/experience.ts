export const experience = [
  {
    company: 'Kymatio',
    role: 'Software Engineer',
    start: 'Sep 2026',
    end: 'Present',
    description_es:
      'Software Engineer desarrollando soluciones end-to-end (Vue/TypeScript + Go) para departamentos internos, migrando el stack antiguo sin tipar (JS, Python, PHP) hacia TypeScript y Go. Referente de IA aplicada al desarrollo, promoviendo buenas prácticas y formando a equipos técnicos y no técnicos.',
    description_en:
      'Software Engineer building end-to-end solutions (Vue/TypeScript + Go) for internal departments, migrating the legacy untyped stack (JS, Python, PHP) to TypeScript and Go. AI adoption lead for engineering, promoting best practices and training both technical and non-technical teams.',
    tech: ['Vue', 'TypeScript', 'Go', 'Python', 'PHP'],
  },
  {
    company: 'Frontend Developer (Freelance)',
    role: 'Frontend Developer',
    start: 'Mar 2025',
    end: 'Aug 2026',
    description_es: 'Desarrollo frontend para web (React) y móvil (React Native). +10 proyectos entregados.',
    description_en: 'Frontend development for web (React) and mobile (React Native). 10+ projects delivered.',
    tech: ['React', 'React Native', 'React Query', 'Redux'],
  },
  {
    company: 'Inditex / MCA',
    role: 'Frontend Developer',
    start: 'Jul 2024',
    end: 'Mar 2025',
    url: 'https://mca-groupe.com/offices/spain1',
    description_es: 'Herramientas internas para People Tech en Inditex.',
    description_en: 'Internal tooling for People Tech area at Inditex.',
    tech: ['React', 'React Query'],
  },
  {
    company: 'HarBest Market',
    role: 'Frontend Developer',
    start: 'Jan 2023',
    end: 'Mar 2024',
    description_es:
      'Mantenimiento y nuevas funcionalidades para herramientas internas, e-commerce y dos apps móviles React Native.',
    description_en:
      'Maintenance and new features for internal tools, public e-commerce, and two React Native mobile apps.',
    tech: ['React', 'React Native', 'Cypress', 'Redux'],
  },
  {
    company: 'OpenBootcamp',
    role: 'Frontend Lead Developer',
    start: 'May 2022',
    end: 'Jan 2023',
    url: 'https://open-bootcamp.com/',
    description_es: 'Campus virtual para alumnos, CMS interno y web pública.',
    description_en: 'Virtual campus, internal CMS, and public website.',
    tech: ['React', 'Next.js', 'Cypress'],
  },
  {
    company: 'Imagina Formación',
    role: 'Frontend Developer',
    start: 'Mar 2021',
    end: 'May 2022',
    url: 'https://imaginaformacion.com/',
    description_es: 'ERP en React para procesos internos, conectado con web pública en Next.js.',
    description_en: 'React ERP for internal processes, connected to Next.js website.',
    tech: ['React', 'Next.js'],
  },
] as const;

export type Experience = (typeof experience)[number];
