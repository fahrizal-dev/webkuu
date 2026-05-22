<template>
  <Transition name="loading">
    <div v-if="isLoading" class="loading-screen flex-col gap-6">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-ocean-500 flex items-center justify-center">
          <span class="text-navy-950 font-display font-bold text-lg">N</span>
        </div>
        <span class="font-display font-bold text-xl text-white">[NAMA BRANDKU]</span>
      </div>

      <!-- Progress bar -->
      <div class="w-48 h-0.5 bg-navy-800 rounded-full overflow-hidden">
        <div
          class="h-full bg-gradient-to-r from-cyan-400 to-ocean-400 rounded-full transition-all duration-300 ease-out"
          :style="{ width: `${progress}%` }"
        />
      </div>

      <!-- Loading text -->
      <p class="text-xs text-white/40 tracking-widest uppercase font-medium">
        {{ loadingText }}
      </p>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoading = ref(true)
const progress = ref(0)
const loadingText = ref('Initializing...')

const texts = ['Initializing...', 'Loading assets...', 'Almost ready...', 'Welcome!']

onMounted(() => {
  let textIndex = 0
  const interval = setInterval(() => {
    progress.value += Math.random() * 30 + 10
    textIndex = Math.min(Math.floor(progress.value / 25), texts.length - 1)
    loadingText.value = texts[textIndex]

    if (progress.value >= 100) {
      progress.value = 100
      clearInterval(interval)
      setTimeout(() => {
        isLoading.value = false
      }, 400)
    }
  }, 200)
})
</script>

<style scoped>
.loading-enter-active,
.loading-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.loading-enter-from {
  opacity: 0;
}

.loading-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
</style>
