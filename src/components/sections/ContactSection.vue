<script setup lang="ts">
import SectionTitle from '@/components/ui/SectionTitle.vue'
import ContactForm from '@/components/ui/ContactForm.vue'
import { contactInfo } from '@/data/contact'
</script>

<template>
  <section id="contact" class="bg-bg-dark px-6 py-20">
    <div class="mx-auto max-w-6xl">
      <SectionTitle title="聯絡我" />

      <p class="mb-12 text-center text-text-secondary">
        有任何合作機會或想法，歡迎與我聯繫！
      </p>

      <div class="flex flex-col gap-12 lg:flex-row lg:gap-16">
        <!-- 左欄表單 -->
        <div class="flex-1">
          <ContactForm />
        </div>

        <!-- 右欄聯絡資訊 -->
        <div class="flex-1 space-y-6">
          <div>
            <h3 class="mb-2 text-lg font-semibold text-text-primary">Email</h3>
            <p class="text-text-secondary">{{ contactInfo.email }}</p>
          </div>
          <div>
            <h3 class="mb-2 text-lg font-semibold text-text-primary">地點</h3>
            <p class="text-text-secondary">{{ contactInfo.location }}</p>
          </div>
          <div>
            <h3 class="mb-2 text-lg font-semibold text-text-primary">社群連結</h3>
            <div class="space-y-3">
              <a
                v-for="social in contactInfo.socials"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-text-secondary transition hover:text-primary"
              >
                <span>{{ social.icon }}</span>
                <span>{{ social.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
