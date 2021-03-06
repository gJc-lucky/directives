import Copy from './copy'

const install = function(Vue) {
  Vue.directive('Copy', Copy)
}

if (window.Vue) {
  window.Copy = Copy
  Vue.use(install) // eslint-disable-line
}

Copy.install = install
export default Copy