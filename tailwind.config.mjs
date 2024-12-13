/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
        'bounce-side-1': 'side-to-side .9s ease-in-out infinite',
				'bounce-side-2': 'side-to-side 1.1s ease-in-out infinite',
				'bounce-side-3': 'side-to-side 1.2s ease-in-out infinite',
      },
      keyframes: {
        'side-to-side': {
					"0%": { transform: 'translateX(0)' },
					"50%": { transform: 'translateX(-10px)' },
					"100%": { transform: 'translateX(0px)' },
				},
			},
			backgroundImage:{
				'hero-img':'url(/img/hero-img.webp)',
			},
			colors:{
				primary:'#403B36',
				secondary:'#BFBAB0',
				tertiary:'#736B65',
				light:'#BFBAB0',
				dark:'#0D0D0D',
			}
		},
	},
	plugins: [],
}
