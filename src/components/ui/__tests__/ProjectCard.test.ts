import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectCard from '../ProjectCard.vue'
import type { Project } from '@/data/projects'

const mockProject: Project = {
  title: 'Spring Boot 微服務實戰課程',
  description: '從零開始建構 RESTful API',
  tags: ['Java', 'Spring Boot', 'Docker'],
  link: 'https://github.com/yanchen184',
}

describe('ProjectCard', () => {
  it('應渲染專案標題', () => {
    const wrapper = mount(ProjectCard, {
      props: { project: mockProject },
    })
    expect(wrapper.text()).toContain('Spring Boot 微服務實戰課程')
  })

  it('應渲染專案描述', () => {
    const wrapper = mount(ProjectCard, {
      props: { project: mockProject },
    })
    expect(wrapper.text()).toContain('從零開始建構 RESTful API')
  })

  it('應渲染所有 tags', () => {
    const wrapper = mount(ProjectCard, {
      props: { project: mockProject },
    })
    mockProject.tags.forEach((tag) => {
      expect(wrapper.text()).toContain(tag)
    })
  })

  it('應包含連結且指向正確 URL', () => {
    const wrapper = mount(ProjectCard, {
      props: { project: mockProject },
    })
    const link = wrapper.find('a')
    expect(link.exists()).toBe(true)
    expect(link.attributes('href')).toBe('https://github.com/yanchen184')
    expect(link.attributes('target')).toBe('_blank')
  })

  it('應使用卡片樣式', () => {
    const wrapper = mount(ProjectCard, {
      props: { project: mockProject },
    })
    const card = wrapper.find('[data-testid="project-card"]')
    expect(card.exists()).toBe(true)
    expect(card.classes()).toContain('bg-bg-card')
    expect(card.classes()).toContain('rounded-card')
  })
})
