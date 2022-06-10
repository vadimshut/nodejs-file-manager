import { argv } from 'process'
import { parseArgs } from './parce-args.js'
import {validateArguments} from './validate-args.js'

if(!validateArguments(argv)) {
    throw new Error('Operation failed')
}

const name = parseArgs(argv)
console.log(name);



