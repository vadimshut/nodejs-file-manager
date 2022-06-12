import { eol } from './eol.js'
import {getCpus} from './get-cpus.js'


export const osSwitch = async (line) => {
  const commandLine = line.split(' ')
  if (commandLine.length !== 2) {
    console.log('Operation failed')
    return
  }

  const command = commandLine[1]

  switch (command) {
    case '--EOL':
      await eol()
      break
    case '--cpus':
      await getCpus()
      break
    case '--homedir':
      console.log(command)
      break
    case '--username':
      console.log(command)
      break
    case '--architecture':
      console.log(command)
      break
    default:
      console.log('Operation failed')
      break
  }
}
