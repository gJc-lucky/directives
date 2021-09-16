import LazyLoad from './lazyLoad'

const install = function(Vue) {
  Vue.directive('LazyLoad', LazyLoad)
}

if (window.Vue) {
  window.LazyLoad = LazyLoad
  Vue.use(install) // eslint-disable-line
}

LazyLoad.install = install
export default LazyLoad