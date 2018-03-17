import Vue from 'vue'
import vjss from 'vuejs-storage'
import 'bootstrap/dist/css/bootstrap.css'

import App from '@/components/App'
import store from '@/store'
import i18n from '@/locales'

Vue.use(vjss)

new Vue({
	el: '#app',
	render: h => h(App),
	store,
	i18n
})
