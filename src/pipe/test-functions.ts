const toLowerCase = (string: string): string => string.toLowerCase()

const trim = (string: string): string => string.trim()

const whitespaceToUnderscore = (string: string): string =>
	string.replaceAll(' ', '_')

export { toLowerCase, trim, whitespaceToUnderscore }
