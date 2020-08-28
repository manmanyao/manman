import Vue from 'vue'
import App from './App.vue'
import ymButton from './components/ymButton.vue'

Vue.config.productionTip = false

Vue.component(ymButton.name,ymButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
