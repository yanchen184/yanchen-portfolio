<script setup lang="ts">
import type { Skill } from '@/data/skills'

defineProps<{
  skill: Skill
}>()
</script>

<template>
  <div
    data-testid="skill-card"
    class="bg-bg-card rounded-card p-6 shadow-lg transition-transform hover:scale-105"
  >
    <div class="mb-4 text-4xl">{{ skill.icon }}</div>
    <h3 class="mb-2 text-xl font-semibold text-text-primary">
      {{ skill.title }}
    </h3>
    <p class="mb-4 text-sm text-text-secondary">
      {{ skill.description }}
    </p>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="tag in skill.tags"
        :key="tag"
        class="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>
