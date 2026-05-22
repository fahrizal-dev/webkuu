<template>
  <section id="why" class="section-padding relative overflow-hidden">
    <div class="absolute inset-0 bg-navy-900/40" />
    <div class="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-ocean-400/5 blur-3xl" />

    <div class="container-custom relative z-10">
      <!-- Header -->
      <div class="text-center mb-16" v-motion :initial="{ opacity: 0, y: 30 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }">
        <div class="section-label justify-center">
          <span class="glow-dot" />
          Why Choose Us
        </div>
        <h2 class="section-title mb-4">
          Kenapa Pilih <span class="gradient-text">[NAMA BRANDKU]</span>?
        </h2>
        <p class="text-white/50 max-w-xl mx-auto">
          Kami tidak hanya membuat website — kami membangun aset digital yang bekerja untuk bisnis Anda.
        </p>
      </div>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <!-- Large card -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="glass-card-hover rounded-3xl p-8 lg:col-span-2 group relative overflow-hidden"
        >
          <div class="absolute top-0 right-0 w-64 h-64 rounded-full bg-cyan-400/5 blur-3xl group-hover:bg-cyan-400/10 transition-all duration-700" />
          <div class="relative z-10">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-ocean-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap class="text-cyan-400" :size="26" />
            </div>
            <h3 class="font-display font-bold text-2xl text-white mb-3">Fast Delivery</h3>
            <p class="text-white/60 leading-relaxed max-w-md">
              Kami berkomitmen pada deadline. Setiap project dikerjakan dengan timeline yang jelas dan
              komunikasi transparan. Tidak ada keterlambatan tanpa alasan.
            </p>
            <div class="mt-6 flex items-center gap-3">
              <div class="flex -space-x-2">
                <div v-for="i in 4" :key="i" class="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400/30 to-ocean-400/30 border-2 border-navy-900 flex items-center justify-center">
                  <User :size="12" class="text-cyan-400" />
                </div>
              </div>
              <span class="text-white/50 text-sm">100+ happy clients</span>
            </div>
          </div>
        </div>

        <!-- Small cards -->
        <div
          v-for="(feature, i) in features"
          :key="feature.title"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: (i + 1) * 100, duration: 600 } }"
          class="glass-card-hover rounded-3xl p-6 group"
        >
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
            :class="`bg-gradient-to-br ${feature.gradient}`"
          >
            <component :is="feature.icon" class="text-white" :size="20" />
          </div>
          <h3 class="font-display font-bold text-lg text-white mb-2">{{ feature.title }}</h3>
          <p class="text-white/50 text-sm leading-relaxed">{{ feature.description }}</p>
        </div>

        <!-- Stats card -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 600, duration: 600 } }"
          class="glass-card-hover rounded-3xl p-8 sm:col-span-2 lg:col-span-3 group"
        >
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div v-for="stat in bigStats" :key="stat.label" class="text-center">
              <div class="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
                <CountUp :end="stat.value" :suffix="stat.suffix" />
              </div>
              <p class="text-white/50 text-sm">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Zap, Code2, Search, Smartphone, Palette, Headphones, User } from 'lucide-vue-next'

const features = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Kode bersih, terstruktur, dan mudah di-maintain. Dokumentasi lengkap untuk setiap project.',
    gradient: 'from-violet-500/30 to-purple-500/30',
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    description: 'Setiap website dioptimasi untuk mesin pencari. Meta tags, sitemap, dan structured data.',
    gradient: 'from-emerald-500/30 to-teal-500/30',
  },
  {
    icon: Smartphone,
    title: 'Fully Responsive',
    description: 'Tampilan sempurna di semua device — mobile, tablet, dan desktop.',
    gradient: 'from-blue-500/30 to-cyan-500/30',
  },
  {
    icon: Palette,
    title: 'Premium UI/UX',
    description: 'Desain modern dan intuitif yang memberikan pengalaman terbaik bagi pengguna.',
    gradient: 'from-fuchsia-500/30 to-pink-500/30',
  },
  {
    icon: Headphones,
    title: 'After-Sales Support',
    description: 'Dukungan penuh setelah project selesai. Maintenance dan update tersedia.',
    gradient: 'from-amber-500/30 to-orange-500/30',
  },
]

const bigStats = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'On-Time Delivery' },
]
</script>
