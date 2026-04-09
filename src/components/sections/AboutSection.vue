<script setup lang="ts">
import SectionTitle from '@/components/ui/SectionTitle.vue'
import SkillCard from '@/components/ui/SkillCard.vue'
import { skills } from '@/data/skills'
</script>

<template>
  <section id="about" class="bg-bg-section px-6 py-20">
    <div class="mx-auto max-w-6xl">
      <SectionTitle title="關於我" />

      <div class="flex flex-col gap-12 lg:flex-row lg:gap-16">
        <!-- 左欄介紹文字 -->
        <div class="flex-1">
          <div class="space-y-4 text-base leading-relaxed text-gray-700">
            <p>
              我是陳彥彤，一名資深後端工程師與程式講師，擁有 5-6 年 Java
              後端開發經驗。畢業於輔仁大學統計資訊系，持有 Microsoft AZ-900
              Azure 認證。
            </p>
            <p>
              目前以自由接案型態工作，專注於企業級應用開發與程式教學，幫助更多人掌握後端開發與全端技術。
            </p>
          </div>
        </div>

        <!-- 右欄技能卡片 -->
        <div class="flex-1">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <SkillCard
              v-for="skill in skills"
              :key="skill.title"
              :skill="skill"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
