import type { Nav } from '~/types/nav'
import { h } from 'vue'
import homepageConfig from '~~/homepage.config'

// 图标查询：https://yesicon.app/ph
// 图标插件：https://marketplace.visualstudio.com/items?itemName=antfu.iconify

export default defineAppConfig({
	...homepageConfig,

	footer: {
		copyright: `© ${new Date().getFullYear()} lpcay`,
		message: h('a', { href: 'https://beian.miit.gov.cn/', target: '_blank', rel: 'noopener nofollow' }, '陕ICP备2025072742号-1'),
	},

	// 用于在主页展示下游引用
	fork: [
		{
			img: 'https://file.furrys.im/img/logo.webp',
			link: 'https://www.furrys.im',
			text: 'lpcay主页',
		}
	],

	nav: [
		{
			title: '',
			items: [
				{ icon: 'ph:house-duotone', text: '主页', url: '/' },
				//{ icon: 'ph:pen-nib-duotone', text: '文章', url: '/article' },
				// { icon: "ph:pen-nib-duotone", text: "文章", url: "https://blog.zhilu.cyou", external: true },
				//{ icon: 'ph:code-duotone', text: '项目', url: '/project' },
				{ icon: 'ph:globe-duotone', text: '站点', url: '/site' },
				{ icon: 'ph:files-duotone', text: '日志', url: '/log' },
			],
		},
		{
			title: '社交',
			items: [
				{ icon: 'ph:github-logo-duotone', text: 'Github', url: 'https://github.com/lpcay', external: true },
			],
		},
	] satisfies Nav,

	themes: {
		light: {
			icon: 'ph:sun-duotone',
			tip: '浅色模式',
		},
		system: {
			icon: 'ph:monitor-duotone',
			tip: '跟随系统',
		},
		dark: {
			icon: 'ph:moon-duotone',
			tip: '深色模式',
		},
	},
})
