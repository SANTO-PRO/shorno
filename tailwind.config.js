/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				primary: {
					500: '#624CF5',
					50: ' #F6F8FD',
					DEFAULT: '#624CF5',
					foreground: 'hsl(var(--primary-foreground))',
				},
				coral: {
					500: '#15BF59',
				},

				grey: {
					600: '#545454', // Subdued - color name in figma
					500: '#757575',
					400: '#AFAFAF', // Disabled - color name in figma
					50: '#F6F6F6', // White Grey - color name in figma
				},
				black: '#000000',
				white: '#FFFFFF',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
			},
			fontFamily: {
				Nunito_Sans: ['var(--font-nunito_sans)'],
			},
			backgroundImage: {
				'hero-img': "url('/assets/images/hero-bg.svg')",
				'dark-gradient':
					'linear-gradient(180deg, hsla(224, 58%, 4%, 1) 0%, hsla(204, 45%, 4%, 1) 50%, hsla(213, 27%, 6%, 1) 100%)',
				'gold-gradient':
					'linear-gradient(180deg, hsla(41, 100%, 89%, 1) 0%, hsla(40, 61%, 78%, 1) 50%, hsla(36, 46%, 62%, 1) 100%)',
				'btn-gold-gradient':
					'linear-gradient(180deg, hsla(44, 88%, 97%, 1) 0%, hsla(37, 42%, 58%, 1) 50%, hsla(21, 90%, 19%, 1) 100%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
