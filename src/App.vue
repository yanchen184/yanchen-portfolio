<script setup lang="ts">
import NavBar from '@/components/layout/NavBar.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import PortfolioSection from '@/components/sections/PortfolioSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import FooterBar from '@/components/layout/FooterBar.vue'
</script>

<template>
  <div class="min-h-screen bg-bg-dark">
    <NavBar />
    <HeroSection />
    <AboutSection />
    <PortfolioSection />
    <ContactSection />
    <FooterBar />
  </div>
</template>
