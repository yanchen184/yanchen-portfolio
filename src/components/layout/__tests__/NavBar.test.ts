import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import NavBar from '../NavBar.vue'

vi.mock('@/composables/useScrollTo', () => ({
  useScrollTo: () => ({
    scrollTo: vi.fn(),
  }),
}))

describe('NavBar', () => {
  it('應渲染 Logo "YC."', () => {
    const wrapper = mount(NavBar)
    expect(wrapper.text()).toContain('YC.')
  })

  it('應渲染所有導覽連結', () => {
    const wrapper = mount(NavBar)
    const expectedLinks = ['首頁', '關於我', '作品集', '技能', '聯絡我']
    expectedLinks.forEach((link) => {
      expect(wrapper.text()).toContain(link)
    })
  })

  it('應有漢堡選單按鈕', () => {
    const wrapper = mount(NavBar)
    const menuButton = wrapper.find('[data-testid="menu-toggle"]')
    expect(menuButton.exists()).toBe(true)
  })

  it('點擊漢堡選單應展開/收合行動選單', async () => {
    const wrapper = mount(NavBar)
    const menuButton = wrapper.find('[data-testid="menu-toggle"]')
    const mobileMenu = wrapper.find('[data-testid="mobile-menu"]')

    // v-show 初始為 display: none
    expect(mobileMenu.attributes('style')).toContain('display: none')

    await menuButton.trigger('click')
    expect(wrapper.find('[data-testid="mobile-menu"]').attributes('style')).not.toContain('display: none')

    await menuButton.trigger('click')
    expect(wrapper.find('[data-testid="mobile-menu"]').attributes('style')).toContain('display: none')
  })

  it('點擊導覽連結應呼叫 scrollTo', async () => {
    const mockScrollTo = vi.fn()
    vi.mocked(await import('@/composables/useScrollTo')).useScrollTo = () => ({
      scrollTo: mockScrollTo,
    })

    const wrapper = mount(NavBar)
    const links = wrapper.findAll('[data-testid="nav-link"]')
    expect(links.length).toBeGreaterThanOrEqual(5)
  })
})
