export interface Project {
  readonly title: string
  readonly description: string
  readonly tags: readonly string[]
  readonly link: string
}

export const projects: readonly Project[] = [
  {
    title: 'Spring Boot 微服務實戰課程',
    description:
      '從零開始建構 Spring Boot RESTful API，涵蓋安全認證、資料庫整合與容器化部署',
    tags: ['Java', 'Spring Boot', 'Docker', 'REST API'],
    link: 'https://github.com/yanchen184',
  },
  {
    title: 'React 前端開發工作坊',
    description:
      '以 React + TypeScript 實作現代化前端應用，包含狀態管理、路由與效能優化',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    link: 'https://github.com/yanchen184',
  },
  {
    title: 'AI 應用開發工作坊',
    description:
      '結合 OpenAI API 與 LangChain 打造智慧助手，實現 RAG 與 Agent 應用',
    tags: ['Python', 'OpenAI', 'LangChain', 'RAG'],
    link: 'https://github.com/yanchen184',
  },
] as const
