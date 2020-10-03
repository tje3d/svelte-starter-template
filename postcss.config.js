const mode = process.env.NODE_ENV || 'development'
const production = mode === 'production'

const plugins = [require('tailwindcss'), require('autoprefixer')]

if (production) {
	plugins.push(
		require('@fullhuman/postcss-purgecss')({
			content: ['./src/**/*.html', './public/index.html', './src/**/*.svelte'],
		}),
	)

	plugins.push(require('cssnano'))
}

module.exports = { plugins }
