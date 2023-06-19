import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hyah UI",
  description: "An accessible and highly customizable component library",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/what-is-hyah-ui' },
      { text: 'Accessibility Guides', link: '/accessibility/keyboard-navigation' },
      { text: 'Components', link: '/components/button' },
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'What is Hyah UI?', link: '/getting-started/what-is-hyah-ui' },
          { text: 'Installation', link: '/getting-started/installation' },
        ]
      },
      {
        text: 'Accessibility Guides',
        items: [
          { text: 'Text Content', link: '/accessibility/text' },
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Progress Bar', link: '/components/progress-bar' },
          { text: 'Skip Nav Link', link: '/components/skip-nav-link' },
        ]
      },
      {
        text: 'Utilities',
        items: [
          { text: 'CSS Utilities', link: '/utilities/css-utilities' },
        ]
      },
      {
        text: 'Customization',
        items: [
          { text: 'Styles', link: '/customization/styles' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nikkistorme/hyah-ui' }
    ]
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
  ],
  vite: {
    resolve: {
      alias: {
        'hyah-ui': '../../src'
      }
    }
  }
})
