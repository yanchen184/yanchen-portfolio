import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SectionTitle from '../SectionTitle.vue'

describe('SectionTitle', () => {
  it('應渲染傳入的 title 文字', () => {
    const wrapper = mount(SectionTitle, {
      props: { title: '關於我' },
    })
    expect(wrapper.text()).toContain('關於我')
  })

  it('應包含 h2 標籤', () => {
    const wrapper = mount(SectionTitle, {
      props: { title: '作品集' },
    })
    expect(wrapper.find('h2').exists()).toBe(true)
  })

  it('應包含 primary 色底線元素', () => {
    const wrapper = mount(SectionTitle, {
      props: { title: '聯絡我' },
    })
    const underline = wrapper.find('[data-testid="title-underline"]')
    expect(underline.exists()).toBe(true)
    expect(underline.classes()).toContain('bg-primary')
  })

  it('預設使用深色標題', () => {
    const wrapper = mount(SectionTitle, {
      props: { title: '關於我' },
    })
    expect(wrapper.find('h2').classes()).toContain('text-text-heading')
  })

  it('light 模式使用白色標題', () => {
    const wrapper = mount(SectionTitle, {
      props: { title: '聯絡我', light: true },
    })
    expect(wrapper.find('h2').classes()).toContain('text-white')
  })
})
