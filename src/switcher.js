import { up } from './commands/os/up.js'
import { cd } from './commands/os/cd.js'
import { ls } from './commands/os/ls.js'
import { cat } from './commands/file/cat.js'
import { add } from './commands/file/add.js'
import { rn } from './commands/file/rn.js'
import { remove } from './commands/file/rm.js'
import { copy } from './commands/file/copy.js'

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
      await cat(line, rl)
      break
    case 'add':
      await add(line)
      break
    case 'rn':
      await rn(line)
      break
    case 'cp':
      await copy(line)
      break
    case 'mv':
      console.log('Coomand: ', line.trim())
      break
    case 'rm':
      await remove(line)
      break

    case '.exit':
      rl.close()
      process.exit()

    default:
      console.log('Invalid input')
      break
  }
}
