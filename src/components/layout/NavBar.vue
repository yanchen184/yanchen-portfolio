<script setup lang="ts">
import { ref } from 'vue'
import { useScrollTo } from '@/composables/useScrollTo'

interface NavLink {
  readonly label: string
  readonly target: string
}

const navLinks: readonly NavLink[] = [
  { label: '首頁', target: 'hero' },
  { label: '關於我', target: 'about' },
  { label: '作品集', target: 'portfolio' },
  { label: '技能', target: 'skills' },
  { label: '聯絡我', target: 'contact' },
]

const { scrollTo } = useScrollTo()
const isMenuOpen = ref(false)

function toggleMenu(): void {
  isMenuOpen.value = !isMenuOpen.value
}

function handleNavClick(target: string): void {
  scrollTo(target)
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="fixed top-0 z-50 w-full bg-bg-dark">
    <div class="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-[80px]">
      <span class="text-[24px] font-bold text-white">YC.</span>

      <!-- 桌面版導覽 -->
      <div class="hidden lg:flex lg:items-center lg:gap-8">
        <button
          v-for="link in navLinks"
          :key="link.target"
          data-testid="nav-link"
          class="text-[16px] font-normal text-text-nav transition hover:text-primary"
          @click="handleNavClick(link.target)"
        >
          {{ link.label }}
        </button>
      </div>

      <!-- 漢堡選單按鈕 -->
      <button
        data-testid="menu-toggle"
        class="text-white lg:hidden"
        @click="toggleMenu"
      >
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- 行動選單 -->
    <div
      v-show="isMenuOpen"
      data-testid="mobile-menu"
      class="border-t border-text-nav/10 bg-bg-dark px-[80px] pb-4 lg:hidden"
    >
      <button
        v-for="link in navLinks"
        :key="link.target"
        data-testid="nav-link"
        class="block w-full py-3 text-left text-[16px] text-text-nav transition hover:text-primary"
        @click="handleNavClick(link.target)"
      >
        {{ link.label }}
      </button>
    </div>
  </nav>
</template>
