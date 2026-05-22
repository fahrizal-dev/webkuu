<template>
  <footer class="relative overflow-hidden border-t border-white/5">
    <!-- Background -->
    <div class="absolute inset-0 bg-navy-950" />
    <div class="absolute inset-0 bg-grid opacity-20" />
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-cyan-400/30 to-transparent" />

    <div class="container-custom relative z-10 py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <!-- Brand -->
        <div class="sm:col-span-2 lg:col-span-1">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-ocean-500 flex items-center justify-center">
              <span class="text-navy-950 font-display font-bold text-base">N</span>
            </div>
            <span class="font-display font-bold text-lg text-white">[NAMA BRANDKU]</span>
          </div>
          <p class="text-white/40 text-sm leading-relaxed mb-5 max-w-xs">
            Jasa pembuatan website profesional untuk bisnis modern. Kami membangun digital presence yang berdampak.
          </p>
          <div class="flex gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              class="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-white/40 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
              :aria-label="social.label"
            >
              <component :is="social.icon" :size="16" />
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-white font-semibold text-sm mb-4">Layanan</h4>
          <ul class="space-y-2.5">
            <li v-for="item in footerServices" :key="item">
              <a href="#services" class="text-white/40 text-sm hover:text-cyan-400 transition-colors" @click.prevent="scrollTo('#services')">
                {{ item }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-white font-semibold text-sm mb-4">Navigasi</h4>
          <ul class="space-y-2.5">
            <li v-for="item in navLinks" :key="item.label">
              <a :href="item.href" class="text-white/40 text-sm hover:text-cyan-400 transition-colors" @click.prevent="scrollTo(item.href)">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-white font-semibold text-sm mb-4">Kontak</h4>
          <ul class="space-y-3">
            <li class="flex items-center gap-3 text-white/40 text-sm">
              <MessageCircle :size="14" class="text-cyan-400 flex-shrink-0" />
              <a href="https://wa.me/6281234567890" target="_blank" class="hover:text-cyan-400 transition-colors">
                +62 812-3456-7890
              </a>
            </li>
            <li class="flex items-center gap-3 text-white/40 text-sm">
              <Mail :size="14" class="text-cyan-400 flex-shrink-0" />
              <a href="mailto:hello@namabrandku.com" class="hover:text-cyan-400 transition-colors">
                hello@namabrandku.com
              </a>
            </li>
            <li class="flex items-start gap-3 text-white/40 text-sm">
              <MapPin :size="14" class="text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>Jakarta, Indonesia</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-white/30 text-xs">
          © {{ new Date().getFullYear() }} [NAMA BRANDKU]. All rights reserved.
        </p>
        <div class="flex items-center gap-1 text-white/30 text-xs">
          <span>Made with</span>
          <span class="text-cyan-400">♥</span>
          <span>using Nuxt.js & TailwindCSS</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Instagram, Github, Linkedin, MessageCircle, Mail, MapPin } from 'lucide-vue-next'

const socials = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
]

const footerServices = [
  'Company Profile',
  'Landing Page',
  'Dashboard Admin',
  'Sistem Rumah Sakit',
  'Website UMKM',
  'UI/UX Design',
  'Web App Custom',
]

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) {
    const lenis = (window as any).__lenis
    if (lenis) lenis.scrollTo(el, { offset: -80 })
    else el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
