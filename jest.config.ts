/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
	preset: 'ts-jest',
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	transform: {
		'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest',
	},
	transformIgnorePatterns: ['node_modules/(?!variables/.*)'],
	modulePathIgnorePatterns: ['build'],
}
