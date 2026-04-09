<script setup lang="ts">
import SectionTitle from '@/components/ui/SectionTitle.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { projects } from '@/data/projects'
</script>

<template>
  <section id="portfolio" class="bg-white px-6 py-20">
    <div class="mx-auto max-w-6xl">
      <SectionTitle title="作品集" />

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>
