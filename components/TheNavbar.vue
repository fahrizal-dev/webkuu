<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled ? 'py-3 bg-navy-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20' : 'py-5'"
  >
    <div class="container-custom flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-ocean-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <span class="text-navy-950 font-display font-bold text-base">N</span>
        </div>
        <span class="font-display font-bold text-lg text-white">[NAMA BRANDKU]</span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden lg:flex items-center gap-1">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="px-4 py-2 text-sm font-medium text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
          @click.prevent="scrollTo(item.href)"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- CTA -->
      <div class="hidden lg:flex items-center gap-3">
        <a
          href="#contact"
          class="btn-primary text-sm"
          @click.prevent="scrollTo('#contact')"
        >
          <MessageCircle :size="15" />
          Konsultasi Gratis
        </a>
      </div>

      <!-- Mobile menu button -->
      <button
        class="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <X v-if="mobileOpen" :size="22" />
        <Menu v-else :size="22" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div
        v-if="mobileOpen"
        class="lg:hidden absolute top-full left-0 right-0 bg-navy-950/95 backdrop-blur-xl border-b border-white/5"
      >
        <div class="container-custom py-4 flex flex-col gap-1">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            @click.prevent="() => { scrollTo(item.href); mobileOpen = false }"
          >
            {{ item.label }}
          </a>
          <div class="pt-3 border-t border-white/5 mt-2">
            <a
              href="#contact"
              class="btn-primary w-full justify-center"
              @click.prevent="() => { scrollTo('#contact'); mobileOpen = false }"
            >
              <MessageCircle :size="15" />
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, MessageCircle } from 'lucide-vue-next'

const scrolled = ref(false)
const mobileOpen = ref(false)

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) {
    const lenis = (window as any).__lenis
    if (lenis) {
      lenis.scrollTo(el, { offset: -80, duration: 1.2 })
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}

function onScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
