import { up } from './commands/os/up.js'
import { cd } from './commands/os/cd.js'
import { ls } from './commands/os/ls.js'

export const commandSwitcher = async (rl, line) => {
  const command = line.split(' ')[0]

  switch (command) {
    case 'up':
      up()
      break
    case 'cd':
      await cd(line)
      break
    case 'ls':
      await ls()
      break
    case 'cat':
      console.log('Coomand: ', line.trim())
      break
    case 'add':
      console.log('Coomand: ', line.trim())
      break
    case 'rn':
      console.log('Coomand: ', line.trim())
      break
    case 'cp':
      console.log('Coomand: ', line.trim())
      break
    case 'mv':
      console.log('Coomand: ', line.trim())
    case '.exit':
      rl.close()
      process.exit()

    default:
      console.log('Invalid input')
      break
  }
}
