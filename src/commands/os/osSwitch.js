import { eol } from './eol.js'
import {getCpus} from './get-cpus.js'
import { homedir, userInfo } from 'os'


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
      console.log(`Home directory: ${homedir()}`)
      break
    case '--username':
      console.log(`Current system user name: ${userInfo().username}`)
      break
    case '--architecture':
      console.log(command)
      break
    default:
      console.log('Operation failed')
      break
  }
}
