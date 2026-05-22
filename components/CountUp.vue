<template>
  <span ref="el">{{ prefix }}{{ displayValue }}{{ suffix }}</span>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const props = withDefaults(defineProps<{
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  start?: number
}>(), {
  duration: 2000,
  prefix: '',
  suffix: '',
  start: 0,
})

const el = ref<HTMLElement>()
const displayValue = ref(props.start)
let observer: IntersectionObserver | null = null
let animated = false

function animate() {
  if (animated) return
  animated = true

  const startTime = performance.now()
  const startVal = props.start
  const endVal = props.end
  const dur = props.duration

  function step(currentTime: number) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / dur, 1)
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3)
    displayValue.value = Math.round(startVal + (endVal - startVal) * eased)

    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}

onMounted(() => {
  if (!el.value) return

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animate()
        observer?.disconnect()
      }
    },
    { threshold: 0.5 }
  )

  observer.observe(el.value)
})
</script>
