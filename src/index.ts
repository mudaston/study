import { Node } from './single-node'

const node = new Node<string>('Test Value')
const toString = node.toString()

console.log('node:', node)
console.log('string:', toString)
