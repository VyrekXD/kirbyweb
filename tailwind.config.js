module.exports = {
	purge: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/Components/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: false,
	theme: {
		extend: {
			fontFamily: {
				primary_font: ['Leckerli One', 'cursive'],
				secondary_font: ['PT Sans', 'sans-serif']
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				pink: {
					main: '#fc9c9c',
					min_dark: '#fd6868',
					dark: '#dc7c7c'
				},
				yellow: {
					main: '#fceb4f'
				},
				red: {
					lightest: '#fc4f4f',
					light: '#fc1d1d',
					main: '#f43433'
				}
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
}
