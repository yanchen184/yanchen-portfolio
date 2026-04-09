import { describe, it, expect } from 'vitest'
import { contactInfo, type ContactInfo, type Social } from '../contact'

describe('contact 資料', () => {
  it('應匯出 contactInfo 物件', () => {
    expect(contactInfo).toBeDefined()
  })

  it('應包含正確的 email', () => {
    expect(contactInfo.email).toBe('bobchen184@gmail.com')
  })

  it('應包含正確的 location', () => {
    expect(contactInfo.location).toBe('台北市，台灣')
  })

  it('應包含 socials 陣列且至少 2 筆', () => {
    expect(Array.isArray(contactInfo.socials)).toBe(true)
    expect(contactInfo.socials.length).toBeGreaterThanOrEqual(2)
  })

  it('每個 social 都有 name、url', () => {
    contactInfo.socials.forEach((social: Social) => {
      expect(social).toHaveProperty('name')
      expect(social).toHaveProperty('url')
      expect(typeof social.name).toBe('string')
      expect(typeof social.url).toBe('string')
    })
  })

  it('應包含 GitHub 和 iT幫忙', () => {
    const names = contactInfo.socials.map((s) => s.name)
    expect(names).toContain('GitHub')
    expect(names).toContain('iT幫忙')
  })
})
