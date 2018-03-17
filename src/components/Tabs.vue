<template>
	<div>
		<ul class="nav nav-tabs">
			<li class="nav-item" v-for="tab in tabs" :key="tab.key">
				<a class="nav-link" :class="{ active: tab.key === curtab }" href="javascript:void(0)" @click="curtab=tab.key">{{tab.text}}</a>
			</li>
		</ul>
		<slot :name="curtab"></slot>
	</div>
</template>
<script>
export default {
	props: {
		tabs: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			curtab: null
		}
	},
	created() {
		if (this.curtab === null) this.curtab = this.tabs[0].key
	},
	storage: {
		namespace: 'tabs',
		keys: ['curtab']
	}
}
</script>
