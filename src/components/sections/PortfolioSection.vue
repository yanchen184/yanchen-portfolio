<script setup lang="ts">
import SectionTitle from '@/components/ui/SectionTitle.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { projects } from '@/data/projects'
</script>

<template>
  <section id="portfolio" class="bg-white py-[60px]">
    <div class="mx-auto max-w-[1440px] px-[80px]">
      <SectionTitle title="作品集" />

      <div class="mt-[25px] flex gap-[40px]">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>
