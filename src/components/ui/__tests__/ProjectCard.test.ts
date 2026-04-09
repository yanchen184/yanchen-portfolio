import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectCard from '../ProjectCard.vue'
import type { Project } from '@/data/projects'

const mockProject: Project = {
  title: 'Spring Boot 後端實戰課程',
  description: '從零到一的 Spring Boot 後端開發課程，涵蓋 JPA、Redis、RabbitMQ 等實戰技術。',
  tags: 'Spring Boot · JPA · Redis',
}

describe('ProjectCard', () => {
  it('應渲染專案標題', () => {
    const wrapper = mount(ProjectCard, {
      props: { project: mockProject },
    })
    expect(wrapper.text()).toContain('Spring Boot 後端實戰課程')
  })

  it('應渲染專案描述', () => {
    const wrapper = mount(ProjectCard, {
      props: { project: mockProject },
    })
    expect(wrapper.text()).toContain('從零到一的 Spring Boot 後端開發課程')
  })

  it('應渲染 tags 字串', () => {
    const wrapper = mount(ProjectCard, {
      props: { project: mockProject },
    })
    expect(wrapper.text()).toContain('Spring Boot · JPA · Redis')
  })

  it('應渲染圖片佔位區', () => {
    const wrapper = mount(ProjectCard, {
      props: { project: mockProject },
    })
    const card = wrapper.find('[data-testid="project-card"]')
    expect(card.exists()).toBe(true)
    expect(card.find('.bg-bg-project-img').exists()).toBe(true)
  })

  it('應使用卡片樣式', () => {
    const wrapper = mount(ProjectCard, {
      props: { project: mockProject },
    })
    const card = wrapper.find('[data-testid="project-card"]')
    expect(card.exists()).toBe(true)
    expect(card.classes()).toContain('bg-bg-light')
    expect(card.classes()).toContain('rounded-[12px]')
  })
})
