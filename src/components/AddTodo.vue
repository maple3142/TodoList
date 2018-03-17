<template>
	<div class="input-group">
		<input type="text" class="form-control" :placeholder="$t('input.placeholder')" v-model="text" @keyup.enter="add(text)">
		<div class="input-group-append">
			<button class="btn btn-outline-secondary" type="button" @click="add(text)" v-t="'input.add'"></button>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			text: ''
		}
	},
	methods: {
		add(text) {
			if (text.length === 0) return
			this.$store.commit('add', { text })
			this.text = ''
		}
	}
}
</script>
