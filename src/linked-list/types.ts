import { List } from './linked-list'


export type Predicate<T> = (value: T, index: number, list: List<T>) => boolean
