import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SkillCard from '../SkillCard.vue'
import type { Skill } from '@/data/skills'

const mockSkill: Skill = {
  icon: '🎨',
  title: '前端開發',
  description: 'React · TypeScript · Tailwind CSS',
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
    expect(wrapper.text()).toContain('React · TypeScript · Tailwind CSS')
  })

  it('應渲染技能 icon', () => {
    const wrapper = mount(SkillCard, {
      props: { skill: mockSkill },
    })
    expect(wrapper.text()).toContain('🎨')
  })

  it('應使用白色背景與 12px 圓角', () => {
    const wrapper = mount(SkillCard, {
      props: { skill: mockSkill },
    })
    const card = wrapper.find('[data-testid="skill-card"]')
    expect(card.exists()).toBe(true)
    expect(card.classes()).toContain('bg-white')
    expect(card.classes()).toContain('rounded-[12px]')
  })
})
