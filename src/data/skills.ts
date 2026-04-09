export interface Skill {
  readonly icon: string
  readonly title: string
  readonly description: string
}

export const skills: readonly Skill[] = [
  {
    icon: '🎨',
    title: '前端開發',
    description: 'React · TypeScript · Tailwind CSS',
  },
  {
    icon: '⚙️',
    title: '後端開發',
    description: 'Java · Spring Boot · Spring Data JPA',
  },
  {
    icon: '🚀',
    title: 'DevOps',
    description: 'Docker · Kubernetes · Azure · CI/CD',
  },
  {
    icon: '🗄️',
    title: '資料庫',
    description: 'MySQL · Redis · RabbitMQ',
  },
] as const
