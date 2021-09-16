import Draggable from './draggable'

const install = function(Vue) {
  Vue.directive('Draggable', Draggable)
}

if (window.Vue) {
  window.Draggable = Draggable
  Vue.use(install) // eslint-disable-line
}

Draggable.install = install
export default Draggable