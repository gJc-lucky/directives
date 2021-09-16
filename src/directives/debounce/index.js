import Debounce from './debounce'

const install = function(Vue) {
  Vue.directive('Debounce', Debounce)
}

if (window.Vue) {
  window.Debounce = Debounce
  Vue.use(install) // eslint-disable-line
}

Debounce.install = install
export default Debounce