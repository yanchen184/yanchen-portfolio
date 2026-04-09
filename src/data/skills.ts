export interface Skill {
  readonly icon: string
  readonly title: string
  readonly description: string
  readonly tags: readonly string[]
}

export const skills: readonly Skill[] = [
  {
    icon: '💻',
    title: '前端開發',
    description: '使用 React、Vue、TypeScript 建構現代化互動式前端應用',
    tags: ['React', 'Vue', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: '⚙️',
    title: '後端開發',
    description: '以 Spring Boot、Node.js 打造穩定高效的 RESTful API 服務',
    tags: ['Java', 'Spring Boot', 'Node.js', 'REST API'],
  },
  {
    icon: '🚀',
    title: 'DevOps',
    description: '透過 CI/CD、Docker、雲端服務實現自動化部署與維運',
    tags: ['Docker', 'GitHub Actions', 'Azure', 'Linux'],
  },
  {
    icon: '🗄️',
    title: '資料庫',
    description: '設計與優化關聯式與 NoSQL 資料庫，確保資料一致性與效能',
    tags: ['MSSQL', 'MySQL', 'Redis', 'Firebase'],
  },
] as const
