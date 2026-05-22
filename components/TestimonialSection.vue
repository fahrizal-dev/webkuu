<template>
  <section id="testimonials" class="section-padding relative overflow-hidden">
    <div class="absolute inset-0 bg-grid opacity-30" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-cyan-400/3 blur-3xl" />

    <div class="container-custom relative z-10">
      <!-- Header -->
      <div class="text-center mb-16" v-motion :initial="{ opacity: 0, y: 30 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }">
        <div class="section-label justify-center">
          <span class="glow-dot" />
          Testimonials
        </div>
        <h2 class="section-title mb-4">
          Kata Mereka <span class="gradient-text">Tentang Kami</span>
        </h2>
        <p class="text-white/50 max-w-xl mx-auto">
          Kepercayaan client adalah prioritas utama kami.
        </p>
      </div>

      <!-- Slider -->
      <div class="relative overflow-hidden" v-motion :initial="{ opacity: 0 }" :visibleOnce="{ opacity: 1, transition: { duration: 600 } }">
        <div
          class="flex transition-transform duration-700 ease-in-out"
          :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }"
        >
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="flex-shrink-0 px-3"
            :style="{ width: `${slideWidth}%` }"
          >
            <div class="glass-card rounded-3xl p-8 h-full">
              <!-- Quote icon -->
              <div class="text-cyan-400/30 mb-4">
                <Quote :size="32" />
              </div>

              <!-- Stars -->
              <div class="flex gap-1 mb-4">
                <Star
                  v-for="i in 5"
                  :key="i"
                  :size="16"
                  class="fill-current"
                  :class="i <= testimonial.rating ? 'text-amber-400' : 'text-white/20'"
                />
              </div>

              <!-- Text -->
              <p class="text-white/70 leading-relaxed mb-6 text-sm md:text-base">
                "{{ testimonial.text }}"
              </p>

              <!-- Author -->
              <div class="flex items-center gap-4 pt-4 border-t border-white/10">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400/30 to-ocean-400/30 flex items-center justify-center flex-shrink-0">
                  <span class="text-cyan-400 font-bold text-lg">{{ testimonial.name[0] }}</span>
                </div>
                <div>
                  <p class="text-white font-semibold text-sm">{{ testimonial.name }}</p>
                  <p class="text-white/40 text-xs">{{ testimonial.role }}</p>
                </div>
                <div class="ml-auto">
                  <span class="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-medium">
                    {{ testimonial.service }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <div class="flex items-center justify-center gap-4 mt-8">
          <button
            class="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/60 hover:text-white hover:border-cyan-400/40 transition-all"
            @click="prev"
          >
            <ChevronLeft :size="18" />
          </button>

          <div class="flex gap-2">
            <button
              v-for="(_, i) in Math.ceil(testimonials.length / slidesPerView)"
              :key="i"
              class="transition-all duration-300 rounded-full"
              :class="currentSlide === i ? 'w-8 h-2 bg-cyan-400' : 'w-2 h-2 bg-white/20 hover:bg-white/40'"
              @click="currentSlide = i"
            />
          </div>

          <button
            class="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/60 hover:text-white hover:border-cyan-400/40 transition-all"
            @click="next"
          >
            <ChevronRight :size="18" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const currentSlide = ref(0)
let autoplayInterval: ReturnType<typeof setInterval>

const slidesPerView = computed(() => {
  if (process.client) {
    if (window.innerWidth >= 1024) return 3
    if (window.innerWidth >= 640) return 2
  }
  return 1
})

const slideWidth = computed(() => 100 / slidesPerView.value)

const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'CEO, PT Maju Bersama',
    service: 'Company Profile',
    rating: 5,
    text: 'Website company profile kami sekarang terlihat sangat profesional. Banyak client baru yang datang karena terkesan dengan tampilan website kami. Highly recommended!',
  },
  {
    id: 2,
    name: 'Sari Dewi',
    role: 'Owner, Warung Sehat',
    service: 'Website UMKM',
    rating: 5,
    text: 'Pelayanan sangat memuaskan, website selesai tepat waktu dan hasilnya melebihi ekspektasi. Penjualan online kami meningkat 3x lipat setelah website baru diluncurkan.',
  },
  {
    id: 3,
    name: 'Dr. Ahmad Fauzi',
    role: 'Direktur, Klinik Sehat',
    service: 'Sistem RS',
    rating: 5,
    text: 'Sistem manajemen klinik yang dibangun sangat membantu operasional kami. Antarmuka yang intuitif membuat staf mudah menggunakannya. Support juga sangat responsif.',
  },
  {
    id: 4,
    name: 'Rina Kusuma',
    role: 'Marketing Manager',
    service: 'Landing Page',
    rating: 5,
    text: 'Landing page yang dibuat sangat efektif untuk campaign kami. Conversion rate naik signifikan dan desainnya benar-benar premium. Tim sangat profesional.',
  },
  {
    id: 5,
    name: 'Hendra Wijaya',
    role: 'Founder, TechStartup',
    service: 'Web App',
    rating: 5,
    text: 'Aplikasi web custom yang dibangun sesuai dengan kebutuhan bisnis kami. Kode bersih, performa bagus, dan dokumentasi lengkap. Akan terus bekerja sama.',
  },
  {
    id: 6,
    name: 'Maya Putri',
    role: 'Brand Manager',
    service: 'UI/UX Design',
    rating: 5,
    text: 'Desain UI/UX yang dihasilkan sangat modern dan sesuai dengan brand identity kami. Proses revisi cepat dan komunikasi sangat baik.',
  },
]

const maxSlide = computed(() => Math.ceil(testimonials.length / slidesPerView.value) - 1)

function next() {
  currentSlide.value = currentSlide.value >= maxSlide.value ? 0 : currentSlide.value + 1
}

function prev() {
  currentSlide.value = currentSlide.value <= 0 ? maxSlide.value : currentSlide.value - 1
}

onMounted(() => {
  autoplayInterval = setInterval(next, 4000)
})

onUnmounted(() => {
  clearInterval(autoplayInterval)
})
</script>
