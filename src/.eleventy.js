const markdownIt = require('markdown-it')
const path = require('path')

module.exports = config => {
	config.setLibrary(
		'md',
		markdownIt({
			html: true,
			breaks: true,
			linkify: true,
			typographer: true
		})
	)
	return {
		dir: {
			input: './',
			layouts: './layouts',
			data: './_data'
		},
		templateFormats: [ 'njk', 'md' ],
		htmlTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk'
	}
}
