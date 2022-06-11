import { argv } from 'process'
import readline from 'readline'
import { parseArgs } from './parce-args.js'
import { validateArguments } from './validate-args.js'
import {commandSwitcher} from './switcher.js'
import {getCwd} from './getCwd.js'
import { EOL } from 'os'

const start = () => {
  if (!validateArguments(argv)) {
    throw new Error('Operation failed')
  }

  const name = parseArgs(argv)
  console.log(`Welcome to the File Manager, ${name}!`)
 

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  
  rl.setPrompt(`You are currently in ${getCwd()} ${EOL}> `)
  rl.prompt()

  rl.on('line', (line) => {
    commandSwitcher(rl, line)
    rl.setPrompt(`You are currently in ${getCwd()} ${EOL}> `)
    rl.prompt()
  }).on('close', () => {
    console.log(`Thank you for using File Manager, ${name}!`)
    rl.close()
  })
}

start()
