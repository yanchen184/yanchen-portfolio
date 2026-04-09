import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroSection from '../HeroSection.vue'

vi.mock('@/composables/useScrollTo', () => ({
  useScrollTo: () => ({
    scrollTo: vi.fn(),
  }),
}))

describe('HeroSection', () => {
  it('應有 id="hero"', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.find('#hero').exists()).toBe(true)
  })

  it('應渲染姓名「陳彥彤」', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toContain('陳彥彤')
  })

  it('應渲染職稱', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toContain('資深後端工程師')
    expect(wrapper.text()).toContain('程式講師')
  })

  it('應渲染兩個 CTA 按鈕', () => {
    const wrapper = mount(HeroSection)
    const buttons = wrapper.findAll('[data-testid="cta-button"]')
    expect(buttons).toHaveLength(2)
    expect(wrapper.text()).toContain('查看作品')
    expect(wrapper.text()).toContain('聯絡我')
  })

  it('應渲染圓形頭像佔位', () => {
    const wrapper = mount(HeroSection)
    const avatar = wrapper.find('[data-testid="avatar-placeholder"]')
    expect(avatar.exists()).toBe(true)
  })
})
