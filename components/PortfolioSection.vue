<template>
  <section id="portfolio" class="section-padding relative overflow-hidden">
    <div class="absolute inset-0 bg-navy-900/30" />

    <div class="container-custom relative z-10">
      <!-- Header -->
      <div class="text-center mb-12" v-motion :initial="{ opacity: 0, y: 30 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }">
        <div class="section-label justify-center">
          <span class="glow-dot" />
          Portfolio
        </div>
        <h2 class="section-title mb-4">
          Project <span class="gradient-text">Magang</span> RSIY PDHI
        </h2>
        <p class="text-white/50 max-w-xl mx-auto text-base">
          5 sistem yang dibangun selama 6 bulan magang di RS Islam Yogyakarta PDHI.
        </p>
      </div>

      <!-- Filter -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="flex flex-wrap justify-center gap-2 mb-10"
      >
        <button
          v-for="cat in categories"
          :key="cat"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
          :class="activeCategory === cat
            ? 'bg-gradient-to-r from-cyan-400 to-ocean-500 text-navy-950 shadow-lg shadow-cyan-400/20'
            : 'glass-card text-white/60 hover:text-white hover:border-cyan-400/30'"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <TransitionGroup name="portfolio-item">
          <div
            v-for="(project, i) in filteredProjects"
            :key="project.id"
            v-motion
            :initial="{ opacity: 0, scale: 0.95 }"
            :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: i * 100, duration: 500 } }"
            class="group relative rounded-2xl overflow-hidden cursor-pointer"
            :class="project.featured ? 'sm:col-span-2 lg:col-span-1' : ''"
            @click="openModal(project)"
          >
            <!-- Image placeholder with gradient -->
            <div
              class="aspect-[4/3] relative overflow-hidden"
              :class="`bg-gradient-to-br ${project.gradient}`"
            >
              <!-- Mock UI inside card -->
              <div class="absolute inset-0 flex items-center justify-center p-6">
                <div class="w-full glass-card rounded-xl p-4 space-y-3">
                  <div class="flex items-center gap-2">
                    <div class="w-3 h-3 rounded-full bg-red-400/60" />
                    <div class="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <div class="w-3 h-3 rounded-full bg-green-400/60" />
                    <div class="flex-1 h-3 rounded bg-white/10 ml-2" />
                  </div>
                  <div class="space-y-2">
                    <div class="h-2 rounded bg-white/20 w-3/4" />
                    <div class="h-2 rounded bg-white/10 w-full" />
                    <div class="h-2 rounded bg-white/10 w-5/6" />
                  </div>
                  <div class="grid grid-cols-3 gap-2 pt-1">
                    <div class="h-8 rounded bg-white/10" />
                    <div class="h-8 rounded bg-white/10" />
                    <div class="h-8 rounded bg-cyan-400/20" />
                  </div>
                </div>
              </div>

              <!-- Hover overlay -->
              <div class="absolute inset-0 bg-navy-950/80 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center">
                <div class="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                  <div class="w-12 h-12 rounded-full bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center mx-auto mb-3">
                    <Eye class="text-cyan-400" :size="20" />
                  </div>
                  <p class="text-white font-semibold text-sm">View Project</p>
                </div>
              </div>
            </div>

            <!-- Info -->
            <div class="glass-card p-5 border-t-0 rounded-t-none">
              <div class="flex items-start justify-between gap-3">
                <div>
                  <span class="text-xs text-cyan-400 font-medium">{{ project.category }}</span>
                  <h3 class="font-display font-bold text-white mt-1">{{ project.title }}</h3>
                  <p class="text-white/50 text-sm mt-1">{{ project.description }}</p>
                </div>
                <ExternalLink class="text-white/30 group-hover:text-cyan-400 transition-colors flex-shrink-0 mt-1" :size="16" />
              </div>
              <div class="flex flex-wrap gap-2 mt-3">
                <span v-for="tech in project.tech" :key="tech" class="px-2 py-0.5 rounded bg-white/5 text-white/40 text-xs">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="selectedProject"
          class="fixed inset-0 z-[100] flex items-center justify-center p-4"
          @click.self="selectedProject = null"
        >
          <div class="absolute inset-0 bg-navy-950/90 backdrop-blur-xl" @click="selectedProject = null" />
          <div class="relative glass-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10">
            <div class="p-8">
              <div class="flex items-start justify-between mb-6">
                <div>
                  <span class="text-xs text-cyan-400 font-medium">{{ selectedProject.category }}</span>
                  <h3 class="font-display font-bold text-2xl text-white mt-1">{{ selectedProject.title }}</h3>
                </div>
                <button
                  class="p-2 rounded-xl hover:bg-white/10 text-white/50 hover:text-white transition-all"
                  @click="selectedProject = null"
                >
                  <X :size="20" />
                </button>
              </div>

              <div :class="`aspect-video rounded-2xl bg-gradient-to-br ${selectedProject.gradient} mb-6 flex items-center justify-center`">
                <div class="glass-card rounded-xl p-6 w-4/5">
                  <div class="space-y-3">
                    <div class="h-3 rounded bg-white/20 w-2/3" />
                    <div class="h-2 rounded bg-white/10 w-full" />
                    <div class="h-2 rounded bg-white/10 w-4/5" />
                    <div class="grid grid-cols-2 gap-3 pt-2">
                      <div class="h-16 rounded-lg bg-white/10" />
                      <div class="h-16 rounded-lg bg-cyan-400/20" />
                    </div>
                  </div>
                </div>
              </div>

              <p class="text-white/60 leading-relaxed mb-6">{{ selectedProject.longDescription }}</p>

              <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="tech in selectedProject.tech" :key="tech" class="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-sm">
                  {{ tech }}
                </span>
              </div>

              <a href="#contact" class="btn-primary w-full justify-center" @click.prevent="() => { selectedProject = null; scrollTo('#contact') }">
                <MessageCircle :size="16" />
                Diskusikan Project Serupa
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Eye, ExternalLink, X, MessageCircle } from 'lucide-vue-next'

interface Project {
  id: number
  title: string
  category: string
  description: string
  longDescription: string
  gradient: string
  tech: string[]
  featured?: boolean
}

const activeCategory = ref('All')
const selectedProject = ref<Project | null>(null)

const categories = ['All', 'Sistem RS', 'Web App', 'Dashboard', 'API']

const projects: Project[] = [
  {
    id: 1,
    title: 'SIDORRS - Sistem Dokumen RS',
    category: 'Sistem RS',
    description: 'Sistem manajemen dokumen regulasi & akreditasi RSIY PDHI Yogyakarta.',
    longDescription: 'Sistem pengelolaan dokumen rumah sakit yang mencakup manajemen regulasi, akreditasi, izin karyawan, dan role management. Dilengkapi fitur dashboard, pencarian dokumen, dan kontrol akses berbasis role (Admin, TU, Karyawan).',
    gradient: 'from-blue-600/40 to-cyan-600/40',
    tech: ['CodeIgniter 3', 'PHP', 'MySQL', 'Bootstrap'],
    featured: true,
  },
  {
    id: 2,
    title: 'Sistem Audit Trail RS',
    category: 'API',
    description: 'Sistem monitoring & logging aktivitas seluruh aplikasi RSIY PDHI.',
    longDescription: 'Sistem audit trail terpusat untuk memantau aktivitas real-time di semua aplikasi rumah sakit. Dilengkapi API dengan enkripsi RC4 + HMAC SHA256, token authentication, auto-archive data, dan client library untuk PHP, JavaScript, dan Python.',
    gradient: 'from-violet-600/40 to-purple-600/40',
    tech: ['CodeIgniter 3', 'PHP', 'MySQL', 'REST API'],
  },
  {
    id: 3,
    title: 'Jadwal Dokter RSIY PDHI',
    category: 'Web App',
    description: 'Aplikasi web jadwal praktik dokter responsif terintegrasi API eksternal.',
    longDescription: 'Aplikasi web untuk menampilkan jadwal praktik dokter secara real-time. Data diambil dari API eksternal RSIY PDHI, dilengkapi filter per poli, pencarian nama dokter, informasi kuota, dan tampilan responsif untuk semua perangkat.',
    gradient: 'from-emerald-600/40 to-teal-600/40',
    tech: ['CodeIgniter 3', 'PHP', 'REST API', 'Bootstrap'],
  },
  {
    id: 4,
    title: 'Pendaftaran Pasien Online',
    category: 'Sistem RS',
    description: 'Sistem pendaftaran pasien online dengan upload dokumen & approval petugas.',
    longDescription: 'Sistem pendaftaran pasien online yang memungkinkan pasien mengupload dokumen (BPJS, KTP, foto, surat rujukan, dll). Dilengkapi fitur approval oleh petugas, validasi dokumen, dan notifikasi status pendaftaran.',
    gradient: 'from-amber-600/40 to-orange-600/40',
    tech: ['CodeIgniter 3', 'PHP', 'MySQL', 'Bootstrap'],
  },
  {
    id: 5,
    title: 'Aplikasi Manajemen Rapat',
    category: 'Dashboard',
    description: 'Sistem manajemen rapat lengkap dengan absensi, notulen, dan laporan.',
    longDescription: 'Aplikasi manajemen rapat rumah sakit yang mencakup penjadwalan meeting, manajemen peserta, absensi digital, upload materi rapat, pencatatan notulen/minutes, laporan rapat, dan notifikasi push. Dibangun sebagai PWA.',
    gradient: 'from-rose-600/40 to-pink-600/40',
    tech: ['CodeIgniter 3', 'PHP', 'MySQL', 'PWA'],
    featured: true,
  },
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return projects
  return projects.filter(p => p.category === activeCategory.value)
})

function openModal(project: Project) {
  selectedProject.value = project
}

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
.portfolio-item-enter-active,
.portfolio-item-leave-active {
  transition: all 0.4s ease;
}

.portfolio-item-enter-from,
.portfolio-item-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
