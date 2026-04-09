export interface Project {
  readonly title: string
  readonly description: string
  readonly tags: string
}

export const projects: readonly Project[] = [
  {
    title: 'Spring Boot 後端實戰課程',
    description:
      '從零到一的 Spring Boot 後端開發課程，涵蓋 JPA、Redis、RabbitMQ 等實戰技術。',
    tags: 'Spring Boot · JPA · Redis',
  },
  {
    title: 'React + TypeScript 前端課程',
    description:
      '現代前端開發實戰，掌握 React 生態系與 TypeScript 型別安全開發。',
    tags: 'React · TypeScript · Tailwind',
  },
  {
    title: 'AI 輔助開發工作坊',
    description:
      '學習如何運用 AI 工具加速開發流程，包含 Claude Code、Cursor 等實戰應用。',
    tags: 'Claude AI · Cursor · GitHub Copilot',
  },
] as const
