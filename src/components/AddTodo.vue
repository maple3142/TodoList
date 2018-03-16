<template>
	<div class="input-group">
		<input type="text" class="form-control" :placeholder="$t('input.placeholder')" v-model="text" @keyup.enter="add(text)">
		<div class="input-group-append">
			<button class="btn btn-outline-secondary" type="button" @click="add(text)" v-html="$t('input.add')"></button>
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
			this.$store.commit('add', { text })
			this.text = ''
		}
	}
}
</script>
