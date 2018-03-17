<template>
	<li class="list-group-item list-group-item-action d-flex justify-content-between" :class="{ active: todo.done }" @click="toggle(todo)">
		<span v-text="todo.text"></span>
		<span @click="remove(todo)">X</span>
	</li>
</template>
<script>
export default {
	props: {
		todo: {
			type: Object,
			required: true
		}
	},
	methods: {
		toggle(todo) {
			this.$store.commit('toggle', todo)
		},
		remove(todo) {
			this.$store.commit('remove', todo)
		}
	}
}
</script>
