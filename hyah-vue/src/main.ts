import { createApp } from 'vue'
import './style.css'
import './testing.css'
import App from './App.vue'

// import * as components from './components';
// import { defineCustomElement } from 'vue';
// Object.keys(components.default).forEach((name: any) => {
//   // @ts-ignore
//   const el = defineCustomElement(name, components.default[name]);
//   console.log('🚀 ~ el:', el);
// })


createApp(App).mount('#app')