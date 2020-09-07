import dynamicHeight from './dynamic-height/dynamicHeight';

// Declare install function executed by Vue.use()
export function installVueDynamicHeight(Vue) {
  if (installVueDynamicHeight.installed) return;
  installVueDynamicHeight.installed = true;
  Vue.directive('DynamicHeight', dynamicHeight);
}

// Create module definition for Vue.use()
const plugin = {
  installVueDynamicHeight,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default dynamicHeight;
