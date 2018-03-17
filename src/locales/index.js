import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './en'

Vue.use(VueI18n)

const i18n = new VueI18n({
	locale: navigator.language,
	fallbackLocale: 'en',
	messages: { en }
})

export default i18n

const supportedLanguages = ['en', 'zh-tw', 'zh-cn']
const loadedLanguages = ['en']

function setI18nLanguage(lang) {
	i18n.locale = lang
	document.getElementsByTagName('html')[0].setAttribute('lang', lang)
	return lang
}

export async function loadLanguage(lang) {
	lang = lang.toLowerCase()
	if (!supportedLanguages.includes(lang)) return 'en'
	if (i18n.locale === lang) return lang
	if (loadedLanguages.includes(lang)) return setI18nLanguage(lang)

	const msgs = await import(/* webpackChunkName: "lang-[request]" */ `@/locales/${lang}`)
	i18n.setLocaleMessage(lang, msgs)
	loadedLanguages.push(lang)
	return setI18nLanguage(lang)
}
