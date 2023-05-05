import { List } from './linked-list'

import comments from './comments.json'

const log = (obj: any) => {
	console.dir(obj, {
		compact: false,
		depth: Infinity,
		showHidden: true,
		showProxy: true,
		colors: true,
	})
}

interface Comment {
	postId: number
	id: number
	name: string
	email: string
	body: string
}

const list = new List<Comment>()

// for (let i = 0; i < 1_000_000_0; i++) {
// 	list.append(i)
// }

for (const comment of comments) {
	list.append(comment)
}

// const Renat = list.find(({ name }) => name === 'alias odio sit')

// log(Renat)

const arr = list.toArray()

// console.log(arr)

// log(list[1])

const a = list.at(-66)
const b = arr.at(-66)
