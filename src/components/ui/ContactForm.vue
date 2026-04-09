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
  <form class="space-y-4" @submit.prevent="handleSubmit">
    <div>
      <input
        v-model="form.name"
        data-testid="input-name"
        type="text"
        placeholder="您的姓名"
        class="w-full rounded-lg border border-text-secondary/20 bg-bg-card px-4 py-3 text-text-primary placeholder-text-secondary outline-none transition focus:border-primary"
      />
    </div>
    <div>
      <input
        v-model="form.email"
        data-testid="input-email"
        type="email"
        placeholder="您的信箱"
        class="w-full rounded-lg border border-text-secondary/20 bg-bg-card px-4 py-3 text-text-primary placeholder-text-secondary outline-none transition focus:border-primary"
      />
    </div>
    <div>
      <textarea
        v-model="form.message"
        data-testid="input-message"
        rows="5"
        placeholder="您的訊息"
        class="w-full resize-none rounded-lg border border-text-secondary/20 bg-bg-card px-4 py-3 text-text-primary placeholder-text-secondary outline-none transition focus:border-primary"
      />
    </div>
    <button
      type="submit"
      class="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary/80"
    >
      送出訊息
    </button>
  </form>
</template>
