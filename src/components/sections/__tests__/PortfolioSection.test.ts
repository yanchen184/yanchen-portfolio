import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PortfolioSection from '../PortfolioSection.vue'

describe('PortfolioSection', () => {
  it('應有 id="portfolio"', () => {
    const wrapper = mount(PortfolioSection)
    expect(wrapper.find('#portfolio').exists()).toBe(true)
  })

  it('應渲染標題「作品集」', () => {
    const wrapper = mount(PortfolioSection)
    expect(wrapper.text()).toContain('作品集')
  })

  it('應渲染 3 張專案卡片', () => {
    const wrapper = mount(PortfolioSection)
    const cards = wrapper.findAll('[data-testid="project-card"]')
    expect(cards).toHaveLength(3)
  })
})
