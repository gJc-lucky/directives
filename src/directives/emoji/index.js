import Emoji from './emoji'

const install = function(Vue) {
  Vue.directive('Emoji', Emoji)
}

if (window.Vue) {
  window.Emoji = Emoji
  Vue.use(install) // eslint-disable-line
}

Emoji.install = install
export default Emoji