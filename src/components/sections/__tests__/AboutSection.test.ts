import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutSection from '../AboutSection.vue'

describe('AboutSection', () => {
  it('應有 id="about"', () => {
    const wrapper = mount(AboutSection)
    expect(wrapper.find('#about').exists()).toBe(true)
  })

  it('應渲染標題「關於我」', () => {
    const wrapper = mount(AboutSection)
    expect(wrapper.text()).toContain('關於我')
  })

  it('應渲染介紹文字', () => {
    const wrapper = mount(AboutSection)
    expect(wrapper.text()).toContain('我是陳彥彤')
    expect(wrapper.text()).toContain('資深後端工程師與程式講師')
    expect(wrapper.text()).toContain('輔仁大學統計資訊系')
  })

  it('應渲染 4 張技能卡片', () => {
    const wrapper = mount(AboutSection)
    const cards = wrapper.findAll('[data-testid="skill-card"]')
    expect(cards).toHaveLength(4)
  })
})
