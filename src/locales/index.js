import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './en'
import zhTW from './zh-tw'

Vue.use(VueI18n)

export default new VueI18n({
	locale: navigator.language,
	fallbackLocale: 'en',
	messages: {
		en,
		'zh-TW': zhTW
	}
})
