const binarySEARCHMAIN = <T>(array: T[], key: T): number => {
	let low = 0
	let high = array.length

	do {
		const mid = Math.floor(low + (high - low) / 2)
		const search = array[mid]

		if (search === key) return mid

		if (search > key) {
			high = mid
			continue
		}

		if (search < key) {
			low = mid + 1
			continue
		}

		break
	} while (low < high)

	return -1
}

export { binarySEARCHMAIN as binarySEARCH }
