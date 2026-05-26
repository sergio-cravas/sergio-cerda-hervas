export interface BlogPost {
  slug: string;
  date: string;
  readingTime: number;
  tags: string[];
  title_es: string;
  title_en: string;
  excerpt_es: string;
  excerpt_en: string;
  body_es: string;
  body_en: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-i-built-this-portfolio',
    date: '2026-05-24',
    readingTime: 5,
    tags: ['react', 'typescript', 'design'],
    title_es: 'Cómo construí este portfolio',
    title_en: 'How I built this portfolio',
    excerpt_es: 'Notas sobre el stack, las decisiones de diseño y los pequeños detalles que dan personalidad.',
    excerpt_en: 'Notes on the stack, design decisions, and the small details that give it personality.',
    body_es: `Este sitio empezó como un fin de semana de exploración. Quería un portfolio que se sintiese mío — no otro template de Vercel — y que demostrara mi atención al detalle sin necesidad de explicarla.\n\nElegí TanStack Start por el routing tipado y el SSR sin fricción. Tailwind CSS v4 para mantener los tokens cerca del CSS nativo. Motion para las micro-animaciones. Zustand para estado mínimo y persistido (idioma, proyectos visitados).\n\nLa parte más divertida fue el juego del caballo. Una rejilla 8x8, un caballo que se mueve en L hacia la libertad y vallas que pones tú. Suficientemente pequeño para terminarlo en una tarde, suficientemente interesante para volver.\n\nSi llegaste hasta aquí, prueba el código Konami. 😉`,
    body_en: `This site started as a weekend exploration. I wanted a portfolio that felt like mine — not another Vercel template — and that proved my attention to detail without needing to explain it.\n\nI picked TanStack Start for typed routing and frictionless SSR. Tailwind CSS v4 to keep tokens close to native CSS. Motion for micro-animations. Zustand for the tiny amount of state I actually persist (language, visited projects).\n\nThe most fun part was the horse game. An 8x8 grid, a knight that moves toward freedom, and fences you place yourself. Small enough to finish in an afternoon, interesting enough to come back to.\n\nIf you made it this far, try the Konami code. 😉`,
  },
];

export const getBlogPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
