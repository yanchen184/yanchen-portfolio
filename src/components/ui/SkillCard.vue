<script setup lang="ts">
import type { Skill } from '@/data/skills'

defineProps<{
  skill: Skill
}>()
</script>

<template>
  <div
    data-testid="skill-card"
    class="h-[160px] w-[280px] rounded-[12px] bg-white p-[24px]"
  >
    <div class="text-[32px]">{{ skill.icon }}</div>
    <h3 class="mt-[14px] text-[20px] font-bold text-text-heading">
      {{ skill.title }}
    </h3>
    <p class="mt-[6px] text-[14px] text-text-muted">
      {{ skill.description }}
    </p>
  </div>
</template>
