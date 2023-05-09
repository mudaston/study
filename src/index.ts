import { pipe } from './pipe'
import {
	toLowerCase,
	trim,
	whitespaceToUnderscore,
} from './pipe/test-functions'

const str = ' TEST STRING '

const pipeStr = pipe(toLowerCase, trim, whitespaceToUnderscore)

const pipedStr = pipeStr(str)

console.log(pipedStr)
