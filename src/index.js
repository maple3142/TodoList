import Vue from 'vue'
import vjss from 'vuejs-storage'
import 'bootstrap/dist/css/bootstrap.css'

import App from '@/components/App'
import store from '@/store'
import i18n, { loadLanguage } from '@/locales'

Vue.use(vjss)

new Vue({
	el: '#app',
	render: h => h(App),
	store,
	i18n
})

loadLanguage(navigator.language).then(lang => console.log('language loaded: %s', lang))
