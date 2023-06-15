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
          // { text: 'Keyboard Navigation', link: '/accessibility/keyboard-navigation' },
          // { text: 'Focus Management', link: '/accessibility/focus-management' },
          // { text: 'Screen Readers', link: '/accessibility/screen-readers' },
          // { text: 'Color Contrast', link: '/accessibility/color-contrast' },
          // { text: 'Semantic HTML', link: '/accessibility/semantic-html' },
          // { text: 'ARIA', link: '/accessibility/aria' },
          // { text: 'Testing', link: '/accessibility/testing' },
        ]
      },
      {
        text: 'Components',
        items: [
          // { text: 'Accordion', link: '/components/accordion' },
          { text: 'Button', link: '/components/button' },
          // { text: 'Checkbox', link: '/components/checkbox' },
          // { text: 'Dialog', link: '/components/dialog' },
          { text: 'Progress Bar', link: '/components/progress-bar' },
          { text: 'Skip Nav Link', link: '/components/skip-nav-link' },
          // { text: 'Tabs', link: '/components/tabs' },
          // { text: 'Tables', link: '/components/tables' },
          // { text: 'Tooltip', link: '/components/tooltip' },
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
  vite: {
    resolve: {
      alias: {
        'hyah-ui': '../../src'
      }
    }
  }
})
