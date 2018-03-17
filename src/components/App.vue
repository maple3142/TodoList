<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<h1 class="pt-2" v-text="$t('app.title')"></h1>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<Tabs :tabs="tabs" class="pt-2">
					<todo-list slot="all" :todolist="all"></todo-list>
					<todo-list slot="undone" :todolist="undone"></todo-list>
					<todo-list slot="done" :todolist="done"></todo-list>
				</Tabs>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<add-todo class="pt-2"/>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import TodoList from '@/components/TodoList'
import Tabs from '@/components/Tabs'
import AddTodo from '@/components/AddTodo'

export default {
	data() {
		return {
			tabs: [
				{ key: 'all', text: this.$t('tabs.all') },
				{ key: 'undone', text: this.$t('tabs.undone') },
				{ key: 'done', text: this.$t('tabs.done') }
			]
		}
	},
	components: {
		TodoList,
		Tabs,
		AddTodo
	},
	computed: {
		...mapGetters(['all', 'undone', 'done'])
	}
}
</script>
