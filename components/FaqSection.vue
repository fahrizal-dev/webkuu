<template>
  <section id="faq" class="section-padding relative overflow-hidden">
    <div class="absolute inset-0 bg-grid opacity-30" />

    <div class="container-custom relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- Left -->
        <div v-motion :initial="{ opacity: 0, x: -30 }" :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 600 } }">
          <div class="section-label">
            <span class="glow-dot" />
            FAQ
          </div>
          <h2 class="section-title mb-6">
            Pertanyaan yang <span class="gradient-text">Sering Ditanya</span>
          </h2>
          <p class="text-white/50 leading-relaxed mb-8">
            Tidak menemukan jawaban yang Anda cari? Hubungi kami langsung dan kami akan dengan senang hati membantu.
          </p>

          <a href="#contact" class="btn-primary" @click.prevent="scrollTo('#contact')">
            <MessageCircle :size="16" />
            Tanya Langsung
          </a>

          <!-- Decorative -->
          <div class="mt-12 glass-card rounded-2xl p-6">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-10 h-10 rounded-xl bg-cyan-400/20 flex items-center justify-center">
                <Clock class="text-cyan-400" :size="18" />
              </div>
              <div>
                <p class="text-white font-semibold text-sm">Response Time</p>
                <p class="text-white/50 text-xs">Rata-rata kurang dari 2 jam</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl bg-cyan-400/20 flex items-center justify-center">
                <MessageCircle class="text-cyan-400" :size="18" />
              </div>
              <div>
                <p class="text-white font-semibold text-sm">Free Consultation</p>
                <p class="text-white/50 text-xs">Konsultasi gratis tanpa komitmen</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Accordion -->
        <div v-motion :initial="{ opacity: 0, x: 30 }" :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 600 } }" class="space-y-3">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="glass-card rounded-2xl overflow-hidden transition-all duration-300"
            :class="openIndex === i ? 'border-cyan-400/20' : ''"
          >
            <button
              class="w-full flex items-center justify-between p-6 text-left"
              @click="openIndex = openIndex === i ? -1 : i"
            >
              <span class="font-semibold text-white text-sm pr-4">{{ faq.question }}</span>
              <div
                class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                :class="openIndex === i ? 'bg-cyan-400/20 rotate-45' : 'bg-white/5'"
              >
                <Plus class="text-cyan-400" :size="16" />
              </div>
            </button>

            <Transition name="accordion">
              <div v-if="openIndex === i" class="px-6 pb-6">
                <div class="w-full h-px bg-white/5 mb-4" />
                <p class="text-white/60 text-sm leading-relaxed">{{ faq.answer }}</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Plus, MessageCircle, Clock } from 'lucide-vue-next'

const openIndex = ref(0)

const faqs = [
  {
    question: 'Berapa lama waktu pengerjaan website?',
    answer: 'Tergantung kompleksitas project. Landing page biasanya 3-7 hari, company profile 1-2 minggu, dan web app custom bisa 1-3 bulan. Kami selalu memberikan estimasi waktu yang realistis di awal project.',
  },
  {
    question: 'Apakah ada garansi setelah website selesai?',
    answer: 'Ya, semua paket sudah termasuk garansi bug fix selama 30 hari setelah launch. Untuk paket Professional dan Enterprise, kami juga menyediakan maintenance support jangka panjang.',
  },
  {
    question: 'Teknologi apa yang digunakan?',
    answer: 'Kami menggunakan teknologi modern seperti Nuxt.js, Vue.js, TypeScript, TailwindCSS, dan berbagai tools terkini. Pilihan teknologi disesuaikan dengan kebutuhan dan skala project Anda.',
  },
  {
    question: 'Bagaimana proses pembayaran?',
    answer: 'Pembayaran dilakukan dalam 2 tahap: 50% di awal sebagai DP, dan 50% setelah project selesai dan disetujui. Kami menerima transfer bank dan berbagai metode pembayaran digital.',
  },
  {
    question: 'Apakah bisa request revisi?',
    answer: 'Tentu! Setiap paket sudah termasuk jumlah revisi tertentu. Revisi tambahan di luar paket bisa diatur dengan biaya yang sangat terjangkau.',
  },
  {
    question: 'Apakah website bisa dikelola sendiri setelah selesai?',
    answer: 'Ya, kami menyediakan CMS (Content Management System) yang mudah digunakan untuk mengelola konten website. Kami juga memberikan training dan dokumentasi lengkap.',
  },
  {
    question: 'Apakah bisa konsultasi dulu sebelum order?',
    answer: 'Tentu! Konsultasi gratis tersedia tanpa komitmen apapun. Hubungi kami via WhatsApp atau form kontak, dan kami akan mendiskusikan kebutuhan Anda secara detail.',
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

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 200px;
}
</style>
