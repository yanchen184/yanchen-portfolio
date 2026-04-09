import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactSection from '../ContactSection.vue'

describe('ContactSection', () => {
  it('應有 id="contact"', () => {
    const wrapper = mount(ContactSection)
    expect(wrapper.find('#contact').exists()).toBe(true)
  })

  it('應渲染標題「聯絡我」', () => {
    const wrapper = mount(ContactSection)
    expect(wrapper.text()).toContain('聯絡我')
  })

  it('應渲染副標文字', () => {
    const wrapper = mount(ContactSection)
    expect(wrapper.text()).toContain('有任何合作機會或想法，歡迎與我聯繫！')
  })

  it('應渲染聯絡表單', () => {
    const wrapper = mount(ContactSection)
    expect(wrapper.find('form').exists()).toBe(true)
  })

  it('應渲染聯絡資訊', () => {
    const wrapper = mount(ContactSection)
    expect(wrapper.text()).toContain('bobchen184@gmail.com')
    expect(wrapper.text()).toContain('台北市')
  })

  it('應渲染社群連結', () => {
    const wrapper = mount(ContactSection)
    expect(wrapper.text()).toContain('GitHub')
    expect(wrapper.text()).toContain('iT幫忙')
  })
})
