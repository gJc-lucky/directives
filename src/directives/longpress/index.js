import Longpress from './longpress'

const install = function(Vue) {
  Vue.directive('Longpress', Longpress)
}

if (window.Vue) {
  window.Longpress = Longpress
  Vue.use(install) // eslint-disable-line
}

Longpress.install = install
export default Longpress