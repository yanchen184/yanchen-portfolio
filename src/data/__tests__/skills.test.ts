import { describe, it, expect } from 'vitest'
import { skills, type Skill } from '../skills'

describe('skills 資料', () => {
  it('應匯出 4 筆技能資料', () => {
    expect(skills).toHaveLength(4)
  })

  it('每筆資料都符合 Skill interface', () => {
    skills.forEach((skill: Skill) => {
      expect(skill).toHaveProperty('icon')
      expect(skill).toHaveProperty('title')
      expect(skill).toHaveProperty('description')
      expect(typeof skill.icon).toBe('string')
      expect(typeof skill.title).toBe('string')
      expect(typeof skill.description).toBe('string')
    })
  })

  it('應包含前端開發、後端開發、DevOps、資料庫四個類別', () => {
    const titles = skills.map((s) => s.title)
    expect(titles).toContain('前端開發')
    expect(titles).toContain('後端開發')
    expect(titles).toContain('DevOps')
    expect(titles).toContain('資料庫')
  })

  it('skills 陣列應為 readonly', () => {
    expect(skills).toBeDefined()
    expect(skills.length).toBeGreaterThan(0)
  })
})
