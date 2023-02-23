/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		colors: {
			primary: '#503a65',
			'primary-dark': '#3c2a4d',
			'primary-ligth': '#574f7d',
			secondary: '#95adbe',
			'secondary-ligth': '#3c2a4d'
		}
	},
	plugins: [require('flowbite/plugin')]
};
