<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background layers -->
    <div class="absolute inset-0 bg-navy-950" />
    <div class="absolute inset-0 bg-grid opacity-100" />
    <div class="absolute inset-0 bg-radial-glow" />

    <!-- Animated orbs -->
    <div class="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-cyan-400/5 blur-3xl animate-float" />
    <div class="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-ocean-400/5 blur-3xl animate-float-delayed" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-400/3 blur-3xl" />

    <!-- Floating elements -->
    <div class="absolute top-24 right-[10%] hidden lg:block animate-float">
      <div class="glass-card rounded-2xl p-4 flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-ocean-400/20 flex items-center justify-center">
          <CheckCircle class="text-cyan-400" :size="20" />
        </div>
        <div>
          <p class="text-xs text-white/50">Project Selesai</p>
          <p class="text-sm font-bold text-white">150+ Projects</p>
        </div>
      </div>
    </div>

    <div class="absolute bottom-32 left-[8%] hidden lg:block animate-float-delayed">
      <div class="glass-card rounded-2xl p-4 flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-ocean-400/20 flex items-center justify-center">
          <Star class="text-cyan-400" :size="20" />
        </div>
        <div>
          <p class="text-xs text-white/50">Rating Client</p>
          <p class="text-sm font-bold text-white">5.0 ⭐ Excellent</p>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="container-custom relative z-10 pt-24 pb-16 text-center">
      <!-- Badge -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-8"
      >
        <span class="glow-dot" />
        Available for new projects
      </div>

      <!-- Headline -->
      <h1
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 700 } }"
        class="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-balance"
      >
        Bangun Website
        <br />
        <span class="gradient-text">Profesional</span>
        <br />
        Untuk Bisnismu
      </h1>

      <!-- Subheadline -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 450, duration: 600 } }"
        class="text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        Kami membangun website modern, cepat, dan elegan yang meningkatkan kepercayaan
        client dan mengakselerasi pertumbuhan bisnis Anda.
      </p>

      <!-- CTA Buttons -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 500 } }"
        class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
      >
        <a href="#contact" class="btn-primary text-base px-8 py-4" @click.prevent="scrollTo('#contact')">
          <MessageCircle :size="18" />
          Mulai Project Sekarang
        </a>
        <a href="#portfolio" class="btn-outline text-base px-8 py-4" @click.prevent="scrollTo('#portfolio')">
          <Eye :size="18" />
          Lihat Portfolio
        </a>
      </div>

      <!-- Stats -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 750, duration: 600 } }"
        class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
      >
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="glass-card rounded-2xl p-5 text-center"
        >
          <div class="font-display text-2xl sm:text-3xl font-bold gradient-text mb-1">
            <CountUp :end="stat.value" :suffix="stat.suffix" />
          </div>
          <p class="text-white/50 text-xs sm:text-sm">{{ stat.label }}</p>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
      <p class="text-white/30 text-xs tracking-widest uppercase">Scroll</p>
      <ChevronDown class="text-white/30" :size="16" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { CheckCircle, Star, MessageCircle, Eye, ChevronDown } from 'lucide-vue-next'

const stats = [
  { value: 150, suffix: '+', label: 'Project Selesai' },
  { value: 98, suffix: '%', label: 'Client Puas' },
  { value: 5, suffix: '+', label: 'Tahun Pengalaman' },
  { value: 24, suffix: '/7', label: 'Support' },
]

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) {
    const lenis = (window as any).__lenis
    if (lenis) {
      lenis.scrollTo(el, { offset: -80, duration: 1.2 })
    } else {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
