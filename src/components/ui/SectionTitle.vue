<script setup lang="ts">
defineProps<{
  title: string
  light?: boolean
}>()
</script>

<template>
  <div class="mb-[25px]">
    <h2 :class="[
      'text-[40px] font-bold',
      light ? 'text-white' : 'text-text-heading'
    ]">
      {{ title }}
    </h2>
    <div
      data-testid="title-underline"
      class="mt-[15px] h-[4px] w-[60px] bg-primary"
    />
  </div>
</template>
