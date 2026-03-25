export interface Pillar {
  title: string
  description: string
  accent: string
  link?: string
}

export const pillars: Pillar[] = [
  {
    title: 'Events and Programming',
    description:
      'We host guest speakers, run tool walkthroughs, and discuss how AI is changing business and the workplace. Meetings are open to all Penn State students regardless of major or experience.',
    accent: 'border-t-navy',
  },
  {
    title: 'Applied AI Labs',
    description:
      'Labs is the research and development arm of the Applied AI Club. We run experiments, build tools, and give members who want to go deeper a place to work on real projects with real AI systems.',
    accent: 'border-t-beaver-blue',
  },
  {
    title: 'Explore AI',
    description:
      'We maintain a registry of AI tools worth knowing, organized for students at every level. From beginner-friendly assistants to the agentic tools shaping the industry, it is a good place to start.',
    accent: 'border-t-pugh-blue',
    link: '/explore',
  },
]
