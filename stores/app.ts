import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isLoading = ref(true)
  const activeSection = ref('home')

  function setLoading(val: boolean) {
    isLoading.value = val
  }

  function setActiveSection(section: string) {
    activeSection.value = section
  }

  return { isLoading, activeSection, setLoading, setActiveSection }
})
