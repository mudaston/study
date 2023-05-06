import { List } from './linked-list/linked-list'

// console.log(0.1 + 0.2 === 0.3)
// console.log((0.3).toFixed(17))
// console.log(0.1 + 0.2)
// console.log(0.1 + 0.2 - 0.3 <= Number.EPSILON)

const list = new List()

for (let i = 0; i < 5; i++) {
	list.append(i)
}

console.log(list.at(-1))
