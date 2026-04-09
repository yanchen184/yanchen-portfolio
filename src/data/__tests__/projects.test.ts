import { describe, it, expect } from 'vitest'
import { projects, type Project } from '../projects'

describe('projects 資料', () => {
  it('應匯出 3 筆專案資料', () => {
    expect(projects).toHaveLength(3)
  })

  it('每筆資料都符合 Project interface', () => {
    projects.forEach((project: Project) => {
      expect(project).toHaveProperty('title')
      expect(project).toHaveProperty('description')
      expect(project).toHaveProperty('tags')
      expect(typeof project.title).toBe('string')
      expect(typeof project.description).toBe('string')
      expect(typeof project.tags).toBe('string')
    })
  })

  it('應包含 Spring Boot 課程、React 課程、AI 工作坊', () => {
    const titles = projects.map((p) => p.title)
    expect(titles.some((t) => t.includes('Spring Boot'))).toBe(true)
    expect(titles.some((t) => t.includes('React'))).toBe(true)
    expect(titles.some((t) => t.includes('AI'))).toBe(true)
  })

  it('每筆專案都有 tags 字串', () => {
    projects.forEach((project) => {
      expect(project.tags.length).toBeGreaterThan(0)
    })
  })
})
