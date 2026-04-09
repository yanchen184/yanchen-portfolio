<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="mb-12 text-center">
    <h2 class="text-3xl font-bold text-text-primary mb-4">
      {{ title }}
    </h2>
    <div
      data-testid="title-underline"
      class="bg-primary mx-auto h-1 w-16 rounded-full"
    />
  </div>
</template>
