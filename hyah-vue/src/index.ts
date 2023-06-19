// import { defineCustomElement } from 'vue';
import * as components from './components';
import './style.css';

const defaultComponents = components?.default;
const hyahComponents = {
  install(Vue: any) {
    Object.keys(defaultComponents).forEach((name: any) => {
      // @ts-ignore
      console.log('🚀 ~ defaultComponents[name].styles:', defaultComponents[name].styles);
      // @ts-ignore
      Vue.component(name, defaultComponents[name]);
    })
  }
};
export default hyahComponents;

export { HButton } from './components/Button';
export { HSkipNavLink } from './components/SkipNavLink';