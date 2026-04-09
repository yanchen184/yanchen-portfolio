<script setup lang="ts">
import { reactive } from 'vue'

interface ContactFormData {
  name: string
  email: string
  message: string
}

const emit = defineEmits<{
  submit: [data: ContactFormData]
}>()

const form = reactive<ContactFormData>({
  name: '',
  email: '',
  message: '',
})

function handleSubmit(): void {
  emit('submit', { ...form })
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<template>
  <form
    class="w-[580px] rounded-[12px] bg-bg-form p-[24px]"
    @submit.prevent="handleSubmit"
  >
    <input
      v-model="form.name"
      data-testid="input-name"
      type="text"
      placeholder="您的姓名"
      class="mt-0 h-[48px] w-[532px] rounded-[8px] bg-bg-input px-4 text-[14px] text-white placeholder-text-muted outline-none transition focus:border focus:border-primary"
    />
    <input
      v-model="form.email"
      data-testid="input-email"
      type="email"
      placeholder="您的信箱"
      class="mt-[16px] h-[48px] w-[532px] rounded-[8px] bg-bg-input px-4 text-[14px] text-white placeholder-text-muted outline-none transition focus:border focus:border-primary"
    />
    <textarea
      v-model="form.message"
      data-testid="input-message"
      placeholder="您的訊息"
      class="mt-[16px] h-[120px] w-[532px] resize-none rounded-[8px] bg-bg-input px-4 py-3 text-[14px] text-white placeholder-text-muted outline-none transition focus:border focus:border-primary"
    />
    <button
      type="submit"
      class="mt-[16px] h-[48px] w-[532px] rounded-[8px] bg-primary text-[16px] font-semibold text-white transition hover:bg-primary/80"
    >
      送出訊息
    </button>
  </form>
</template>
