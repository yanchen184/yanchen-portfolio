import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactForm from '../ContactForm.vue'

describe('ContactForm', () => {
  it('應渲染姓名輸入欄位', () => {
    const wrapper = mount(ContactForm)
    const nameInput = wrapper.find('input[data-testid="input-name"]')
    expect(nameInput.exists()).toBe(true)
    expect(nameInput.attributes('placeholder')).toContain('姓名')
  })

  it('應渲染信箱輸入欄位', () => {
    const wrapper = mount(ContactForm)
    const emailInput = wrapper.find('input[data-testid="input-email"]')
    expect(emailInput.exists()).toBe(true)
    expect(emailInput.attributes('type')).toBe('email')
  })

  it('應渲染訊息文字區域', () => {
    const wrapper = mount(ContactForm)
    const textarea = wrapper.find('textarea[data-testid="input-message"]')
    expect(textarea.exists()).toBe(true)
  })

  it('應渲染送出按鈕', () => {
    const wrapper = mount(ContactForm)
    const button = wrapper.find('button[type="submit"]')
    expect(button.exists()).toBe(true)
    expect(button.text()).toContain('送出')
  })

  it('送出表單時應 emit submit 事件並附帶表單資料', async () => {
    const wrapper = mount(ContactForm)

    await wrapper.find('[data-testid="input-name"]').setValue('陳彥彤')
    await wrapper.find('[data-testid="input-email"]').setValue('test@example.com')
    await wrapper.find('[data-testid="input-message"]').setValue('你好')

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('submit')).toBeTruthy()
    expect(wrapper.emitted('submit')![0]).toEqual([
      {
        name: '陳彥彤',
        email: 'test@example.com',
        message: '你好',
      },
    ])
  })

  it('送出後應清空表單', async () => {
    const wrapper = mount(ContactForm)

    await wrapper.find('[data-testid="input-name"]').setValue('陳彥彤')
    await wrapper.find('[data-testid="input-email"]').setValue('test@example.com')
    await wrapper.find('[data-testid="input-message"]').setValue('你好')

    await wrapper.find('form').trigger('submit.prevent')

    const nameInput = wrapper.find('[data-testid="input-name"]').element as HTMLInputElement
    const emailInput = wrapper.find('[data-testid="input-email"]').element as HTMLInputElement
    const messageInput = wrapper.find('[data-testid="input-message"]').element as HTMLTextAreaElement

    expect(nameInput.value).toBe('')
    expect(emailInput.value).toBe('')
    expect(messageInput.value).toBe('')
  })
})
