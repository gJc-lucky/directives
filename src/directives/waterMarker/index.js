import WaterMarker from './waterMarker'

const install = function(Vue) {
  Vue.directive('WaterMarker', WaterMarker)
}

if (window.Vue) {
  window.WaterMarker = WaterMarker
  Vue.use(install) // eslint-disable-line
}

WaterMarker.install = install
export default WaterMarker