import Permission from './permission'

const install = function(Vue) {
  Vue.directive('Permission', Permission)
}

if (window.Vue) {
  window.Permission = Permission
  Vue.use(install) // eslint-disable-line
}

Permission.install = install
export default Permission