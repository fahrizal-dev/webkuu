export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/motion/nuxt',
    '@vueuse/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: '[NAMA BRANDKU] - Jasa Pembuatan Website Professional',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Jasa pembuatan website profesional: Company Profile, Landing Page, Dashboard Admin, Sistem Rumah Sakit, Website UMKM, UI/UX Design, Web App Custom.',
        },
        { name: 'keywords', content: 'jasa website, web developer, company profile, landing page, dashboard admin, sistem rumah sakit, UMKM, UI/UX design' },
        { property: 'og:title', content: '[NAMA BRANDKU] - Jasa Pembuatan Website Professional' },
        { property: 'og:description', content: 'Bangun website profesional untuk bisnis Anda bersama kami.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Syne:wght@400;500;600;700;800&display=swap',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  tailwindcss: {
    configPath: '~/tailwind.config.ts',
  },

  typescript: {
    strict: true,
  },

  nitro: {
    compressPublicAssets: true,
  },

  experimental: {
    viewTransition: true,
  },
})
