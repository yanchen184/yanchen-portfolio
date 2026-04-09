<script setup lang="ts">
import SectionTitle from '@/components/ui/SectionTitle.vue'
import SkillCard from '@/components/ui/SkillCard.vue'
import { skills } from '@/data/skills'
</script>

<template>
  <section id="about" class="bg-bg-light py-[60px]">
    <div class="mx-auto max-w-[1440px] px-[80px]">
      <SectionTitle title="關於我" />

      <div class="flex gap-[100px]">
        <!-- 左欄介紹文字 -->
        <div class="w-[550px]">
          <div class="mt-[25px] space-y-4 text-[18px] leading-relaxed text-text-body">
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

        <!-- 右欄技能卡片 2x2 -->
        <div class="grid grid-cols-2 gap-x-[30px] gap-y-[20px]">
          <SkillCard
            v-for="skill in skills"
            :key="skill.title"
            :skill="skill"
          />
        </div>
      </div>
    </div>
  </section>
</template>
