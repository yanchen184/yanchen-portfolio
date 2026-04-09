import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FooterBar from '../FooterBar.vue'

describe('FooterBar', () => {
  it('應渲染版權文字', () => {
    const wrapper = mount(FooterBar)
    expect(wrapper.text()).toContain('© 2026 陳彥彤 All Rights Reserved.')
  })
})
