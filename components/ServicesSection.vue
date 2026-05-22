<template>
  <section id="services" class="section-padding relative overflow-hidden">
    <div class="absolute inset-0 bg-grid opacity-50" />
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />

    <div class="container-custom relative z-10">
      <!-- Header -->
      <div class="text-center mb-16" v-motion :initial="{ opacity: 0, y: 30 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }">
        <div class="section-label justify-center">
          <span class="glow-dot" />
          Our Services
        </div>
        <h2 class="section-title mb-4">
          Layanan <span class="gradient-text">Premium</span> Kami
        </h2>
        <p class="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
          Solusi digital lengkap untuk kebutuhan bisnis Anda, dari website sederhana hingga sistem enterprise.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: i * 80, duration: 600 } }"
          class="glass-card-hover rounded-2xl p-6 group cursor-pointer animated-border"
          :class="service.featured ? 'sm:col-span-2 lg:col-span-1' : ''"
        >
          <!-- Icon -->
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
            :class="`bg-gradient-to-br ${service.gradient}`"
          >
            <component :is="service.icon" class="text-white" :size="22" />
          </div>

          <!-- Badge -->
          <div v-if="service.badge" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-medium mb-3">
            {{ service.badge }}
          </div>

          <h3 class="font-display font-bold text-lg text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {{ service.title }}
          </h3>
          <p class="text-white/50 text-sm leading-relaxed mb-4">
            {{ service.description }}
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in service.tags"
              :key="tag"
              class="px-2 py-1 rounded-md bg-white/5 text-white/40 text-xs"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Arrow -->
          <div class="mt-5 flex items-center gap-2 text-cyan-400/60 text-sm font-medium group-hover:text-cyan-400 transition-colors">
            <span>Learn more</span>
            <ArrowRight :size="14" class="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Building2, Zap, LayoutDashboard, Heart, ShoppingBag, Palette, Code2, ArrowRight
} from 'lucide-vue-next'

const services = [
  {
    icon: Building2,
    title: 'Company Profile',
    description: 'Website profesional yang merepresentasikan identitas dan nilai perusahaan Anda dengan elegan.',
    gradient: 'from-blue-500/30 to-cyan-500/30',
    tags: ['Responsive', 'SEO', 'CMS'],
    badge: 'Popular',
  },
  {
    icon: Zap,
    title: 'Landing Page',
    description: 'Halaman konversi tinggi yang dirancang untuk mengubah pengunjung menjadi pelanggan.',
    gradient: 'from-cyan-500/30 to-teal-500/30',
    tags: ['High Convert', 'Fast', 'A/B Test'],
    badge: null,
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard Admin',
    description: 'Panel admin modern dengan visualisasi data real-time dan manajemen konten yang intuitif.',
    gradient: 'from-violet-500/30 to-purple-500/30',
    tags: ['Analytics', 'CRUD', 'Charts'],
    badge: null,
  },
  {
    icon: Heart,
    title: 'Sistem Rumah Sakit',
    description: 'Sistem manajemen rumah sakit terintegrasi: pasien, dokter, jadwal, dan rekam medis.',
    gradient: 'from-rose-500/30 to-pink-500/30',
    tags: ['EMR', 'Scheduling', 'Reports'],
    badge: 'Enterprise',
  },
  {
    icon: ShoppingBag,
    title: 'Website UMKM',
    description: 'Toko online dan profil bisnis untuk UMKM yang siap bersaing di era digital.',
    gradient: 'from-amber-500/30 to-orange-500/30',
    tags: ['E-Commerce', 'Payment', 'Catalog'],
    badge: null,
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Desain antarmuka yang indah, intuitif, dan berpusat pada pengalaman pengguna.',
    gradient: 'from-fuchsia-500/30 to-pink-500/30',
    tags: ['Figma', 'Prototype', 'Research'],
    badge: null,
  },
  {
    icon: Code2,
    title: 'Web App Custom',
    description: 'Aplikasi web full-stack sesuai kebutuhan spesifik bisnis Anda dengan teknologi terkini.',
    gradient: 'from-emerald-500/30 to-cyan-500/30',
    tags: ['Full-Stack', 'API', 'Scalable'],
    badge: 'Custom',
  },
]
</script>
