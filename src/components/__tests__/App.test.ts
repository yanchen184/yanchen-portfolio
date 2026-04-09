import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'

vi.mock('@/composables/useScrollTo', () => ({
  useScrollTo: () => ({
    scrollTo: vi.fn(),
  }),
}))

describe('App', () => {
  it('應渲染 NavBar', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('YC.')
  })

  it('應渲染 HeroSection', () => {
    const wrapper = mount(App)
    expect(wrapper.find('#hero').exists()).toBe(true)
  })

  it('應渲染 AboutSection', () => {
    const wrapper = mount(App)
    expect(wrapper.find('#about').exists()).toBe(true)
  })

  it('應渲染 PortfolioSection', () => {
    const wrapper = mount(App)
    expect(wrapper.find('#portfolio').exists()).toBe(true)
  })

  it('應渲染 ContactSection', () => {
    const wrapper = mount(App)
    expect(wrapper.find('#contact').exists()).toBe(true)
  })

  it('應渲染 FooterBar', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('© 2026 陳彥彤 All Rights Reserved.')
  })
})
