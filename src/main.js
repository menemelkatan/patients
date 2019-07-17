import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
import router from './router'
import swal from 'sweetalert'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueAgile from 'vue-agile'


Vue.use(vueResource)
Vue.use(VueAgile)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCh34e8OlE8_DYo1aA0BL-8hhL6uvDANIc'
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
