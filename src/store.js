import Vue from 'vue'
import Vuex from 'vuex'
import vjss from 'vuejs-storage'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		todolist: []
	},
	mutations: {
		add(state, { text }) {
			state.todolist.push({
				text,
				id: Date.now().toString() + Math.random(),
				done: false
			})
		},
		remove(state, { id }) {
			state.todolist = state.todolist.filter(todo => todo.id !== id)
		},
		toggle(state, { id }) {
			state.todolist.filter(todo => todo.id === id).forEach(todo => (todo.done = !todo.done))
		}
	},
	getters: {
		all: state => state.todolist,
		done: state => state.todolist.filter(todo => todo.done),
		undone: state => state.todolist.filter(todo => !todo.done)
	},
	plugins: [
		vjss({
			namespace: 'store',
			keys: ['todolist']
		})
	]
})
