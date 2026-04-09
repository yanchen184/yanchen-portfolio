<script setup lang="ts">
import type { Project } from '@/data/projects'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div
    data-testid="project-card"
    class="w-[400px] overflow-hidden rounded-[12px] bg-bg-light"
  >
    <!-- 圖片佔位 -->
    <div class="h-[200px] w-[400px] bg-bg-project-img" />
    <!-- 內容 -->
    <div class="px-[24px]">
      <h3 class="mt-[20px] text-[22px] font-bold text-text-heading">
        {{ project.title }}
      </h3>
      <p class="mt-[11px] w-[360px] text-[14px] text-text-muted">
        {{ project.description }}
      </p>
      <p class="mt-[51px] text-[12px] text-primary">
        {{ project.tags }}
      </p>
    </div>
  </div>
</template>
