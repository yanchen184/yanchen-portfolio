<script setup lang="ts">
import { useScrollTo } from '@/composables/useScrollTo'

const { scrollTo } = useScrollTo()
</script>

<template>
  <section id="hero" class="min-h-screen bg-bg-dark px-6 pt-24">
    <div class="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
      <!-- 左側文字 -->
      <div class="flex-1 text-center lg:text-left">
        <p class="mb-2 text-lg text-text-secondary">Hi, 我是</p>
        <h1 class="mb-4 text-5xl font-bold text-text-primary lg:text-[72px] lg:leading-tight">
          陳彥彤
        </h1>
        <p class="mb-6 text-xl font-semibold text-primary">
          資深後端工程師 / 程式講師
        </p>
        <p class="mb-8 max-w-lg text-text-secondary">
          擅長 Java Spring Boot 後端開發與全端技術教學，致力於打造高品質的企業級應用與培育技術人才。
        </p>
        <div class="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
          <button
            data-testid="cta-button"
            class="rounded-lg bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary/80"
            @click="scrollTo('portfolio')"
          >
            查看作品
          </button>
          <button
            data-testid="cta-button"
            class="rounded-lg border border-primary px-8 py-3 font-semibold text-primary transition hover:bg-primary/10"
            @click="scrollTo('contact')"
          >
            聯絡我
          </button>
        </div>
      </div>

      <!-- 右側頭像佔位 -->
      <div class="flex flex-1 justify-center">
        <div
          data-testid="avatar-placeholder"
          class="h-64 w-64 rounded-full border-4 border-primary bg-bg-card lg:h-80 lg:w-80"
        />
      </div>
    </div>
  </section>
</template>
