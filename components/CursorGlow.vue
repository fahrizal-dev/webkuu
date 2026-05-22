<template>
  <div
    ref="cursorRef"
    class="cursor-glow hidden lg:block"
    :style="{ left: `${x}px`, top: `${y}px`, opacity: visible ? 1 : 0 }"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)
const visible = ref(false)
const cursorRef = ref<HTMLElement>()

let rafId: number

function onMouseMove(e: MouseEvent) {
  cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(() => {
    x.value = e.clientX
    y.value = e.clientY
    visible.value = true
  })
}

function onMouseLeave() {
  visible.value = false
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove, { passive: true })
  document.addEventListener('mouseleave', onMouseLeave)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseleave', onMouseLeave)
  cancelAnimationFrame(rafId)
})
</script>
