<script setup lang="ts">
import type { CardProps } from '~/components/partial/Card.vue'
import { ZLink } from '#components'

useHead({ title: '站点' })
definePageMeta({ headerText: '一些网站' })

const personalSites: Array<CardProps> = [
	{
		name: 'Lpcay',
		nameAlt: '主页',
		buttons: [
			{ icon: 'ph:planet-duotone', text: '访问', to: 'https://www.furrys.im' },
		],
		desc: '我的个人主页网站，展示个人信息和项目。',
	},
]
</script>

<template>
<ZTitle>个人站点</ZTitle>
<ZCardList :data-list="personalSites" />
</template>

<style lang="scss" scoped>
</style>
