module.exports = opts => ({
	entry: './src/index.js',
	html: {
		title: 'Todo List'
	},
	presets: [
		require('./poi-preset-sw-precache')()
	]
})
