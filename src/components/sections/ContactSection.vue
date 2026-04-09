<script setup lang="ts">
import SectionTitle from '@/components/ui/SectionTitle.vue'
import ContactForm from '@/components/ui/ContactForm.vue'
import { contactInfo } from '@/data/contact'
</script>

<template>
  <section id="contact" class="bg-bg-dark py-[60px]">
    <div class="mx-auto max-w-[1440px] px-[80px]">
      <SectionTitle title="聯絡我" light />

      <p class="mt-[30px] text-[18px] text-text-secondary">
        有任何合作機會或想法，歡迎與我聯繫！
      </p>

      <div class="mt-[55px] flex gap-[120px]">
        <!-- 左欄表單 -->
        <ContactForm />

        <!-- 右欄聯絡資訊 -->
        <div class="space-y-[47px]">
          <div>
            <h3 class="flex items-center gap-2 text-[16px] font-bold text-white">
              <span>📧</span> Email
            </h3>
            <p class="mt-[8px] text-[16px] text-text-secondary">{{ contactInfo.email }}</p>
          </div>
          <div>
            <h3 class="flex items-center gap-2 text-[16px] font-bold text-white">
              <span>📍</span> 地點
            </h3>
            <p class="mt-[8px] text-[16px] text-text-secondary">{{ contactInfo.location }}</p>
          </div>
          <div>
            <h3 class="flex items-center gap-2 text-[16px] font-bold text-white">
              <span>🔗</span> 社群連結
            </h3>
            <div class="mt-[8px] flex gap-3">
              <a
                v-for="social in contactInfo.socials"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[16px] text-primary transition hover:underline"
              >
                {{ social.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
