<template>
  <section id="contact" class="section-padding relative overflow-hidden">
    <div class="absolute inset-0 bg-navy-900/40" />
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-cyan-400/5 blur-3xl" />

    <div class="container-custom relative z-10">
      <!-- Header -->
      <div class="text-center mb-16" v-motion :initial="{ opacity: 0, y: 30 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }">
        <div class="section-label justify-center">
          <span class="glow-dot" />
          Contact
        </div>
        <h2 class="section-title mb-4">
          Mulai <span class="gradient-text">Project Anda</span>
        </h2>
        <p class="text-white/50 max-w-xl mx-auto">
          Ceritakan kebutuhan Anda dan kami akan memberikan solusi terbaik. Konsultasi gratis, tanpa komitmen.
        </p>
      </div>

      <div class="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
        <!-- Contact Info -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          class="lg:col-span-2 space-y-6"
        >
          <div
            v-for="info in contactInfo"
            :key="info.label"
            class="glass-card-hover rounded-2xl p-5 flex items-start gap-4"
          >
            <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400/20 to-ocean-400/20 flex items-center justify-center flex-shrink-0">
              <component :is="info.icon" class="text-cyan-400" :size="20" />
            </div>
            <div>
              <p class="text-white/40 text-xs font-medium uppercase tracking-wider mb-1">{{ info.label }}</p>
              <a
                :href="info.href"
                class="text-white font-medium text-sm hover:text-cyan-400 transition-colors"
                :target="info.external ? '_blank' : undefined"
              >
                {{ info.value }}
              </a>
            </div>
          </div>

          <!-- Social -->
          <div class="glass-card rounded-2xl p-5">
            <p class="text-white/40 text-xs font-medium uppercase tracking-wider mb-4">Follow Us</p>
            <div class="flex gap-3">
              <a
                v-for="social in socials"
                :key="social.label"
                :href="social.href"
                target="_blank"
                class="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-white/50 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
                :aria-label="social.label"
              >
                <component :is="social.icon" :size="18" />
              </a>
              <!-- TikTok -->
              <a
                href="https://www.tiktok.com/@isca203"
                target="_blank"
                aria-label="TikTok"
                class="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-white/50 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          class="lg:col-span-3"
        >
          <form class="glass-card rounded-3xl p-8 space-y-5" @submit.prevent="handleSubmit">
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">Nama Lengkap</label>
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="John Doe"
                  required
                  class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-cyan-400/50 focus:bg-white/8 transition-all"
                />
              </div>
              <div>
                <label class="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-cyan-400/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label class="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">Layanan yang Dibutuhkan</label>
              <select
                v-model="form.service"
                required
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400/50 transition-all appearance-none"
              >
                <option value="" disabled class="bg-navy-900">Pilih layanan...</option>
                <option v-for="s in services" :key="s" :value="s" class="bg-navy-900">{{ s }}</option>
              </select>
            </div>

            <div>
              <label class="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">Budget</label>
              <select
                v-model="form.budget"
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400/50 transition-all appearance-none"
              >
                <option value="" disabled class="bg-navy-900">Estimasi budget...</option>
                <option v-for="b in budgets" :key="b" :value="b" class="bg-navy-900">{{ b }}</option>
              </select>
            </div>

            <div>
              <label class="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">Pesan</label>
              <textarea
                v-model="form.message"
                rows="4"
                placeholder="Ceritakan kebutuhan project Anda..."
                required
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-cyan-400/50 transition-all resize-none"
              />
            </div>

            <!-- Submit -->
            <div class="flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                class="btn-primary flex-1 justify-center py-4"
                :disabled="isSubmitting"
              >
                <Loader2 v-if="isSubmitting" :size="18" class="animate-spin" />
                <Send v-else :size="18" />
                {{ isSubmitting ? 'Mengirim...' : 'Kirim Pesan' }}
              </button>

              <a
                href="https://wa.me/62895321875208?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20pembuatan%20website"
                target="_blank"
                class="btn-outline flex-1 justify-center py-4"
              >
                <MessageCircle :size="18" />
                WhatsApp
              </a>
            </div>

            <!-- Success message -->
            <Transition name="fade">
              <div v-if="submitted" class="flex items-center gap-3 p-4 rounded-xl bg-emerald-400/10 border border-emerald-400/20">
                <CheckCircle class="text-emerald-400 flex-shrink-0" :size="20" />
                <p class="text-emerald-400 text-sm">Pesan berhasil dikirim! Kami akan menghubungi Anda segera.</p>
              </div>
            </Transition>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook, Github, Send, MessageCircle, Loader2, CheckCircle } from 'lucide-vue-next'

const form = ref({
  name: '',
  email: '',
  service: '',
  budget: '',
  message: '',
})

const isSubmitting = ref(false)
const submitted = ref(false)

const services = [
  'Company Profile',
  'Landing Page',
  'Dashboard Admin',
  'Sistem Rumah Sakit',
  'Website UMKM',
  'UI/UX Design',
  'Web App Custom',
]

const budgets = [
  'Rp 1 - 3 Juta',
  'Rp 3 - 5 Juta',
  'Rp 5 - 10 Juta',
  'Rp 10 - 20 Juta',
  'Rp 20 Juta+',
]

const contactInfo = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+62 895-321-875-208',
    href: 'https://wa.me/62895321875208',
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'fahrizaladji171@gmail.com',
    href: 'mailto:fahrizaladji171@gmail.com',
    external: false,
  },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Yogyakarta, Indonesia',
    href: '#',
    external: false,
  },
]

const socials = [
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/fahrizallm_10/' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/fahrizal-dev' },
  { icon: Facebook, label: 'Facebook', href: 'https://web.facebook.com/fahrizalQQ/?locale=id_ID' },
  { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@pahrisukatidurwa' },
]

async function handleSubmit() {
  isSubmitting.value = true
  try {
    const res = await fetch('https://formspree.io/f/mojbrapy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        service: form.value.service,
        budget: form.value.budget,
        message: form.value.message,
      }),
    })
    if (res.ok) {
      submitted.value = true
      form.value = { name: '', email: '', service: '', budget: '', message: '' }
      setTimeout(() => { submitted.value = false }, 5000)
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
