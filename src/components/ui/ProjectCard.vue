<script setup lang="ts">
import type { Project } from '@/data/projects'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div
    data-testid="project-card"
    class="bg-bg-card rounded-card overflow-hidden shadow-lg transition-transform hover:scale-105"
  >
    <div class="p-6">
      <h3 class="mb-2 text-xl font-semibold text-text-primary">
        {{ project.title }}
      </h3>
      <p class="mb-4 text-sm text-text-secondary">
        {{ project.description }}
      </p>
      <div class="mb-4 flex flex-wrap gap-2">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
        >
          {{ tag }}
        </span>
      </div>
      <a
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center text-sm text-primary hover:underline"
      >
        查看專案 &rarr;
      </a>
    </div>
  </div>
</template>
