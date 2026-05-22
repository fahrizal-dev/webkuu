<template>
  <section id="pricing" class="section-padding relative overflow-hidden">
    <div class="absolute inset-0 bg-navy-900/30" />
    <div class="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-400/5 blur-3xl" />

    <div class="container-custom relative z-10">
      <!-- Header -->
      <div class="text-center mb-12" v-motion :initial="{ opacity: 0, y: 30 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }">
        <div class="section-label justify-center">
          <span class="glow-dot" />
          Pricing
        </div>
        <h2 class="section-title mb-4">
          Harga <span class="gradient-text">Transparan</span>
        </h2>
        <p class="text-white/50 max-w-xl mx-auto mb-8">
          Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket sudah termasuk revisi dan support.
        </p>

        <!-- Toggle -->
        <div class="inline-flex items-center gap-3 glass-card rounded-full p-1.5">
          <button
            class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
            :class="billing === 'monthly' ? 'bg-gradient-to-r from-cyan-400 to-ocean-500 text-navy-950' : 'text-white/60 hover:text-white'"
            @click="billing = 'monthly'"
          >
            Monthly
          </button>
          <button
            class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2"
            :class="billing === 'yearly' ? 'bg-gradient-to-r from-cyan-400 to-ocean-500 text-navy-950' : 'text-white/60 hover:text-white'"
            @click="billing = 'yearly'"
          >
            Yearly
            <span class="text-xs px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-400 font-semibold">-20%</span>
          </button>
        </div>
      </div>

      <!-- Pricing Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div
          v-for="(plan, i) in plans"
          :key="plan.name"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: i * 150, duration: 600 } }"
          class="relative rounded-3xl p-8 transition-all duration-500"
          :class="plan.popular
            ? 'bg-gradient-to-b from-cyan-400/10 to-ocean-400/5 border border-cyan-400/30 shadow-2xl shadow-cyan-400/10 scale-105'
            : 'glass-card hover:border-cyan-400/20'"
        >
          <!-- Popular badge -->
          <div v-if="plan.popular" class="absolute -top-4 left-1/2 -translate-x-1/2">
            <div class="px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-ocean-500 text-navy-950 text-xs font-bold">
              ⭐ Most Popular
            </div>
          </div>

          <!-- Plan name -->
          <div class="mb-6">
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              :class="`bg-gradient-to-br ${plan.gradient}`"
            >
              <component :is="plan.icon" class="text-white" :size="22" />
            </div>
            <h3 class="font-display font-bold text-xl text-white">{{ plan.name }}</h3>
            <p class="text-white/50 text-sm mt-1">{{ plan.description }}</p>
          </div>

          <!-- Price -->
          <div class="mb-8">
            <div class="flex items-end gap-2">
              <span class="text-white/50 text-sm">Rp</span>
              <span class="font-display font-bold text-4xl text-white">
                {{ billing === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice }}
              </span>
            </div>
            <p class="text-white/40 text-xs mt-1">
              {{ billing === 'yearly' ? 'per tahun (hemat 20%)' : 'per project' }}
            </p>
          </div>

          <!-- Features -->
          <ul class="space-y-3 mb-8">
            <li
              v-for="feature in plan.features"
              :key="feature.text"
              class="flex items-start gap-3 text-sm"
              :class="feature.included ? 'text-white/70' : 'text-white/25'"
            >
              <div class="flex-shrink-0 mt-0.5">
                <Check v-if="feature.included" class="text-cyan-400" :size="16" />
                <X v-else class="text-white/20" :size="16" />
              </div>
              {{ feature.text }}
            </li>
          </ul>

          <!-- CTA -->
          <a
            href="#contact"
            class="block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300"
            :class="plan.popular
              ? 'bg-gradient-to-r from-cyan-400 to-ocean-500 text-navy-950 hover:shadow-lg hover:shadow-cyan-400/30 hover:-translate-y-0.5'
              : 'border border-white/20 text-white hover:border-cyan-400/40 hover:bg-cyan-400/5'"
            @click.prevent="scrollTo('#contact')"
          >
            {{ plan.cta }}
          </a>
        </div>
      </div>

      <!-- Note -->
      <p class="text-center text-white/30 text-sm mt-8">
        Harga dapat disesuaikan dengan kebutuhan spesifik project Anda. Hubungi kami untuk konsultasi gratis.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Check, X, Rocket, Star, Crown } from 'lucide-vue-next'

const billing = ref<'monthly' | 'yearly'>('monthly')

const plans = [
  {
    name: 'Basic',
    description: 'Untuk bisnis yang baru memulai',
    icon: Rocket,
    gradient: 'from-blue-500/30 to-cyan-500/30',
    monthlyPrice: '2.5 Jt',
    yearlyPrice: '2 Jt',
    popular: false,
    cta: 'Mulai Basic',
    features: [
      { text: 'Website 5 halaman', included: true },
      { text: 'Responsive design', included: true },
      { text: 'SEO basic', included: true },
      { text: 'Contact form', included: true },
      { text: '3x revisi', included: true },
      { text: 'Domain & hosting setup', included: true },
      { text: 'Custom animations', included: false },
      { text: 'CMS integration', included: false },
      { text: 'Priority support', included: false },
    ],
  },
  {
    name: 'Professional',
    description: 'Untuk bisnis yang ingin berkembang',
    icon: Star,
    gradient: 'from-cyan-500/30 to-ocean-500/30',
    monthlyPrice: '5 Jt',
    yearlyPrice: '4 Jt',
    popular: true,
    cta: 'Mulai Professional',
    features: [
      { text: 'Website 10 halaman', included: true },
      { text: 'Responsive design', included: true },
      { text: 'SEO advanced', included: true },
      { text: 'Contact form + WhatsApp', included: true },
      { text: '5x revisi', included: true },
      { text: 'Domain & hosting setup', included: true },
      { text: 'Custom animations', included: true },
      { text: 'CMS integration', included: true },
      { text: 'Priority support 3 bulan', included: true },
    ],
  },
  {
    name: 'Enterprise',
    description: 'Untuk bisnis skala besar',
    icon: Crown,
    gradient: 'from-violet-500/30 to-purple-500/30',
    monthlyPrice: 'Custom',
    yearlyPrice: 'Custom',
    popular: false,
    cta: 'Hubungi Kami',
    features: [
      { text: 'Halaman tidak terbatas', included: true },
      { text: 'Responsive design', included: true },
      { text: 'SEO enterprise', included: true },
      { text: 'Semua integrasi', included: true },
      { text: 'Revisi tidak terbatas', included: true },
      { text: 'Domain & hosting setup', included: true },
      { text: 'Custom animations', included: true },
      { text: 'CMS + Admin panel', included: true },
      { text: 'Priority support 1 tahun', included: true },
    ],
  },
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
