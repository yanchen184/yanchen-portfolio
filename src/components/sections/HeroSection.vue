<script setup lang="ts">
import { useScrollTo } from '@/composables/useScrollTo'

const { scrollTo } = useScrollTo()
</script>

<template>
  <section id="hero" class="relative h-[700px] bg-bg-dark pt-[72px]">
    <div class="mx-auto max-w-[1440px] px-[80px]">
      <!-- 左側文字 -->
      <div class="pt-[180px]">
        <p class="text-[24px] text-text-sub">Hi, 我是</p>
        <h1 class="mt-[10px] text-[72px] font-bold leading-tight text-white">
          陳彥彤
        </h1>
        <p class="mt-[18px] text-[28px] text-primary">
          資深後端工程師 / 程式講師
        </p>
        <p class="mt-[18px] w-[500px] text-[18px] text-text-secondary">
          擅長 Java Spring Boot 後端開發與全端技術教學，致力於打造高品質的企業級應用與培育技術人才。
        </p>
        <div class="mt-[48px] flex gap-[20px]">
          <button
            data-testid="cta-button"
            class="h-[52px] w-[180px] rounded-[8px] bg-primary text-[18px] font-semibold text-white transition hover:bg-primary/80"
            @click="scrollTo('portfolio')"
          >
            查看作品
          </button>
          <button
            data-testid="cta-button"
            class="h-[52px] w-[160px] rounded-[8px] border-2 border-primary bg-transparent text-[18px] text-primary transition hover:bg-primary/10"
            @click="scrollTo('contact')"
          >
            聯絡我
          </button>
        </div>
      </div>

      <!-- 右側頭像佔位（桌面版） -->
      <div
        data-testid="avatar-placeholder"
        class="absolute right-[140px] top-[192px] hidden h-[400px] w-[400px] rounded-full border-[3px] border-primary bg-bg-avatar lg:block"
      />
    </div>
  </section>
</template>
