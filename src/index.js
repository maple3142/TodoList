import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'

import App from '@/App'
import store from '@/store'
import i18n from '@/i18n'

window.app = new Vue({
	el: '#app',
	render: h => <App />,
	store,
	i18n
})
