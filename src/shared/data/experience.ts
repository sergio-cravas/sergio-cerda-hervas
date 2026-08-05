export const experience = [
  {
    company: 'Frontend Developer (Freelance)',
    role: 'Frontend Developer',
    start: 'Jan 2025',
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
    company: 'Nova Hiring',
    start: 'Apr 2024',
    end: 'Feb 2025',
    positions: [
      {
        role: 'Socio de tecnología',
        start: 'Jul 2024',
        end: 'Feb 2025',
        description_es:
          'Apoyo en el traspaso de conocimiento al nuevo equipo técnico de Nova Hiring y en desarrollos o mantenimientos puntuales del sistema.',
        description_en:
          "Supported the knowledge handover to Nova Hiring's new technical team and handled occasional development and maintenance work.",
        tech: ['React', 'Node.js'],
      },
      {
        role: 'Lead Software Developer',
        start: 'Apr 2024',
        end: 'Jul 2024',
        description_es:
          'Desarrollo full-stack del ERP, la plataforma de entrevistas y el backend (Docker + AWS) de la startup, incluyendo un asistente con IA para el análisis de candidatos y una API pública.',
        description_en:
          "Full-stack development of the startup's ERP, interview platform, and backend (Docker + AWS), including an AI-based candidate analysis assistant and a public API.",
        tech: ['React', 'Node.js', 'Docker', 'AWS'],
      },
    ],
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
    company: 'Imagina Formación',
    start: 'Oct 2019',
    end: 'Jan 2023',
    url: 'https://imaginaformacion.com/',
    positions: [
      {
        role: 'Frontend Lead Developer | OpenBootcamp',
        start: 'May 2022',
        end: 'Jan 2023',
        description_es:
          'Responsable del desarrollo inicial y mantenimiento frontend del campus virtual de OpenBootcamp, y liderazgo del equipo de FrontEnd de la compañía.',
        description_en:
          "Responsible for the initial development and frontend maintenance of the OpenBootcamp virtual campus, and led the company's FrontEnd team.",
        tech: ['React', 'Next.js', 'Cypress'],
      },
      {
        role: 'Frontend Developer',
        start: 'Mar 2021',
        end: 'May 2022',
        description_es: 'ERP interno desde cero con React y ChakraUI, y nueva web con Next.js + Plasmic.',
        description_en: 'Internal ERP from scratch with React and ChakraUI, and new website with Next.js + Plasmic.',
        tech: ['React', 'Next.js'],
      },
      {
        role: 'Asistente y tutor online',
        start: 'Oct 2019',
        end: 'Mar 2021',
        description_es:
          'Redacción y revisión de módulos formativos, desarrollo de un programa interno con Google Apps Script, y gestión de un equipo de 5 personas durante 3 meses.',
        description_en:
          'Wrote and reviewed learning modules, built an internal tool with Google Apps Script, and led a team of 5 for three months.',
        tech: ['Google Apps Script'],
      },
    ],
  },
] as const;

export type Experience = (typeof experience)[number];
