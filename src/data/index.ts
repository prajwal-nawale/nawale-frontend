import type { NavLink, QuickLink, Project } from '../types'

export const navLinks: NavLink[] = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'ChatBot', href: '#chatbot' },
  { label: 'Contact', href: '#contact' },
]

export const quickLinks: QuickLink[] = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Chatbot', href: '#chatbot' },
  { label: 'Contact', href: '#contact' },
]

export const projects: Project[] = [
  {
    title: 'AI Resume Chatbot',
    description: 'Context-aware AI chatbot that answers questions about my resume using Retrieval-Augmented Generation (RAG) and semantic search.',
    image: '',
    link: 'https://nawale.in/#chatbot',
    date: '2026-04-10',
    tags: ['Python', 'Flask', 'LlamaIndex', 'RAG', 'OpenRouter'],
    points: [
      'Built a RAG pipeline using LlamaIndex with document chunking, embeddings, and semantic retrieval',
      'Integrated OpenRouter API for LLM-based response generation with contextual accuracy',
      'Implemented conversational memory to support multi-turn interactions',
      'Deployed as a Flask microservice and integrated with a React frontend',
      'Optimized retrieval accuracy to reduce hallucinations and improve relevance'
    ]
  },
  {
  title: 'AI Interview Coach',
  description: 'AI-powered interview preparation platform that generates role-specific questions, simulates real interview scenarios, and provides intelligent feedback using LLMs.',
  image: '',
  link: 'https://github.com/prajwal-nawale/PrepMeUp',
  date: '2025-11-11',
  tags: ['React', 'TypeScript', 'Node.js', 'OpenRouter API', 'AI', 'RAG'],
  points: [
    'Built an AI-driven interview simulator generating technical, behavioral, and situational questions based on user role',
    'Integrated LLM APIs (OpenRouter) for dynamic question generation and adaptive difficulty adjustment',
    'Designed modular backend for handling interview sessions, user responses, and evaluation pipelines',
    'Implemented structured feedback system to analyze answers and provide improvement suggestions',
    'Developed responsive frontend with React and Tailwind for seamless mock interview experience'
  ]
},
  {
    title: 'Portfolio Website with AI Assistant',
    description: 'Modern brutalist portfolio with integrated AI chatbot, showcasing projects, skills, and interactive features.',
    image: '',
    link: 'https://nawale.in',
    date: '2026-04-10',
    tags: ['React', 'TypeScript', 'Tailwind', 'AI', 'Vercel'],
    points: [
      'Designed and developed a brutalist-style portfolio with structured UI system',
      'Integrated AI chatbot using RAG for interactive recruiter experience',
      'Implemented expandable project cards and horizontal scrolling UI',
      'Ensured responsive design and smooth navigation across sections',
      'Deployed on Vercel with optimized performance and SEO setup'
    ]
  }
]   