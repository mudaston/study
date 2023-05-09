import { compose } from './compose'
import {
	toLowerCase,
	trim,
	whitespaceToUnderscore,
} from './compose/test-functions'

const str = ' TEST VALUE '
const composeStr = compose(toLowerCase, whitespaceToUnderscore, trim)

const composedStr = composeStr(str)

console.log(composedStr)
