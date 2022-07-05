module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{jpg,png,html,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};