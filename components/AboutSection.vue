<template>
  <section id="about" class="section-padding relative overflow-hidden">
    <div class="absolute inset-0 bg-grid opacity-30" />
    <div class="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-400/5 blur-3xl" />

    <div class="container-custom relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Visual -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -40 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 700 } }"
          class="relative"
        >
          <!-- Main card -->
          <div class="glass-card rounded-3xl p-8 relative">
            <!-- Avatar placeholder -->
            <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-ocean-500/30 border border-cyan-400/20 flex items-center justify-center mb-6">
              <User class="text-cyan-400" :size="40" />
            </div>

            <h3 class="font-display font-bold text-2xl text-white mb-1">Full-Stack Developer</h3>
            <p class="text-cyan-400 text-sm font-medium mb-4">& UI/UX Designer</p>
            <p class="text-white/60 text-sm leading-relaxed mb-6">
              Passionate developer dengan 5+ tahun pengalaman membangun produk digital yang berdampak.
              Spesialis dalam Vue.js ecosystem, modern web technologies, dan desain yang berpusat pada pengguna.
            </p>

            <!-- Skills -->
            <div class="space-y-3">
              <div v-for="skill in skills" :key="skill.name">
                <div class="flex justify-between text-sm mb-1">
                  <span class="text-white/70 font-medium">{{ skill.name }}</span>
                  <span class="text-cyan-400 font-semibold">{{ skill.level }}%</span>
                </div>
                <div class="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    class="h-full rounded-full bg-gradient-to-r from-cyan-400 to-ocean-400 transition-all duration-1000 ease-out"
                    :style="{ width: `${skill.level}%` }"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Floating tech badges -->
          <div class="absolute -top-4 -right-4 glass-card rounded-2xl p-3 flex items-center gap-2 animate-float">
            <Code2 class="text-cyan-400" :size="16" />
            <span class="text-white text-xs font-medium">Vue.js Expert</span>
          </div>

          <div class="absolute -bottom-4 -left-4 glass-card rounded-2xl p-3 flex items-center gap-2 animate-float-delayed">
            <Award class="text-cyan-400" :size="16" />
            <span class="text-white text-xs font-medium">150+ Projects</span>
          </div>
        </div>

        <!-- Right: Content -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 40 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 700 } }"
        >
          <div class="section-label">
            <span class="glow-dot" />
            About Me
          </div>
          <h2 class="section-title mb-6">
            Developer yang <span class="gradient-text">Peduli</span> Hasil
          </h2>
          <div class="space-y-4 text-white/60 leading-relaxed mb-8">
            <p>
              Saya adalah seorang full-stack developer yang berfokus pada pembuatan website dan aplikasi web
              berkualitas tinggi. Dengan pengalaman lebih dari 5 tahun, saya telah membantu ratusan bisnis
              membangun kehadiran digital yang kuat.
            </p>
            <p>
              Setiap project yang saya kerjakan mendapat perhatian penuh — dari arsitektur kode yang bersih,
              desain yang intuitif, hingga performa yang optimal. Saya percaya bahwa website yang baik bukan
              hanya terlihat bagus, tapi juga bekerja dengan sempurna.
            </p>
          </div>

          <!-- Timeline -->
          <div class="space-y-4 mb-8">
            <div
              v-for="(item, i) in timeline"
              :key="i"
              class="flex gap-4"
            >
              <div class="flex flex-col items-center">
                <div class="w-3 h-3 rounded-full bg-cyan-400 flex-shrink-0 mt-1" style="box-shadow: 0 0 8px rgba(34,211,238,0.6)" />
                <div v-if="i < timeline.length - 1" class="w-px flex-1 bg-gradient-to-b from-cyan-400/40 to-transparent mt-1" />
              </div>
              <div class="pb-4">
                <span class="text-xs text-cyan-400 font-semibold">{{ item.year }}</span>
                <h4 class="text-white font-semibold text-sm mt-0.5">{{ item.title }}</h4>
                <p class="text-white/50 text-xs mt-0.5">{{ item.desc }}</p>
              </div>
            </div>
          </div>

          <!-- Tech stack -->
          <div>
            <p class="text-white/40 text-xs font-semibold tracking-widest uppercase mb-3">Tech Stack</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in techStack"
                :key="tech"
                class="px-3 py-1.5 rounded-lg glass-card text-white/70 text-xs font-medium hover:text-cyan-400 hover:border-cyan-400/30 transition-all cursor-default"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { User, Code2, Award } from 'lucide-vue-next'

const skills = [
  { name: 'Vue.js / Nuxt.js', level: 95 },
  { name: 'UI/UX Design', level: 88 },
  { name: 'Node.js / Laravel', level: 85 },
  { name: 'TypeScript', level: 90 },
]

const timeline = [
  { year: '2019', title: 'Mulai Freelance', desc: 'Memulai karir sebagai web developer freelance' },
  { year: '2020', title: '50+ Projects', desc: 'Mencapai milestone 50 project selesai' },
  { year: '2022', title: 'Spesialisasi Vue.js', desc: 'Fokus pada Vue.js ecosystem dan modern web' },
  { year: '2024', title: '150+ Projects', desc: 'Melayani 100+ client dari berbagai industri' },
]

const techStack = [
  'Vue.js', 'Nuxt.js', 'TypeScript', 'TailwindCSS', 'GSAP',
  'Node.js', 'Laravel', 'MySQL', 'PostgreSQL', 'Figma',
  'Docker', 'Vercel', 'Git',
]
</script>
