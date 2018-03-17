<template>
	<ul class="list-group">
		<todo-item v-for="todo in todolist" :key="todo.id" :todo="todo"></todo-item>
		<li class="list-group-item text-center" v-if="todolist.length===0" v-html="$t('todolist.notodo')"></li>
	</ul>
</template>
<script>
import { mapState } from 'vuex'
import TodoItem from '@/components/TodoItem'

export default {
	props: {
		todolist: {
			type: Array,
			required: true
		}
	},
	components: {
		TodoItem
	}
}
</script>
