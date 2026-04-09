import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useScrollTo } from '../useScrollTo'

describe('useScrollTo', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  it('應回傳 scrollTo 函式', () => {
    const { scrollTo } = useScrollTo()
    expect(typeof scrollTo).toBe('function')
  })

  it('呼叫 scrollTo 時應對目標元素執行 scrollIntoView', () => {
    const el = document.createElement('div')
    el.id = 'test-section'
    document.body.appendChild(el)
    el.scrollIntoView = vi.fn()

    const { scrollTo } = useScrollTo()
    scrollTo('test-section')

    expect(el.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('目標元素不存在時不應拋錯', () => {
    const { scrollTo } = useScrollTo()
    expect(() => scrollTo('non-existent')).not.toThrow()
  })
})
