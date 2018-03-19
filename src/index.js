import Vue from 'vue'
import vjss from 'vuejs-storage'
import 'bootstrap/dist/css/bootstrap.css'

import App from '@/components/App'
import store from '@/store'
import i18n, { loadLanguage } from '@/locales'

loadLanguage(navigator.language).then(lang => console.log('language loaded: %s', lang))

Vue.use(vjss)

new Vue({
	el: '#app',
	render: h => h(App),
	store,
	i18n
})

if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/service-worker.js')
		.then(reg => {
			reg.onupdatefound = () => {
				const installing = reg.installing
				installing.onstatechange = () => {
					if (installing.state === 'installed') {
						if (navigator.serviceWorker.controller) {
							console.log('New content is available; please refresh.')
						} else {
							console.log('Content is cached for offline use.')
						}
					}
				}
			}
		})
		.catch(err => console.error('Service Worker register error:', err))
}
