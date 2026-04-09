import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SkillCard from '../SkillCard.vue'
import type { Skill } from '@/data/skills'

const mockSkill: Skill = {
  icon: '💻',
  title: '前端開發',
  description: '使用 React、Vue 建構現代化應用',
  tags: ['React', 'Vue', 'TypeScript'],
}

describe('SkillCard', () => {
  it('應渲染技能標題', () => {
    const wrapper = mount(SkillCard, {
      props: { skill: mockSkill },
    })
    expect(wrapper.text()).toContain('前端開發')
  })

  it('應渲染技能描述', () => {
    const wrapper = mount(SkillCard, {
      props: { skill: mockSkill },
    })
    expect(wrapper.text()).toContain('使用 React、Vue 建構現代化應用')
  })

  it('應渲染技能 icon', () => {
    const wrapper = mount(SkillCard, {
      props: { skill: mockSkill },
    })
    expect(wrapper.text()).toContain('💻')
  })

  it('應渲染所有 tags', () => {
    const wrapper = mount(SkillCard, {
      props: { skill: mockSkill },
    })
    mockSkill.tags.forEach((tag) => {
      expect(wrapper.text()).toContain(tag)
    })
  })

  it('應使用卡片樣式（bg-bg-card + 圓角）', () => {
    const wrapper = mount(SkillCard, {
      props: { skill: mockSkill },
    })
    const card = wrapper.find('[data-testid="skill-card"]')
    expect(card.exists()).toBe(true)
    expect(card.classes()).toContain('bg-bg-card')
    expect(card.classes()).toContain('rounded-card')
  })
})
