import { up } from './commands/os/up.js'
import { cd } from './commands/os/cd.js'
import { ls } from './commands/os/ls.js'
import { cat } from './commands/file/cat.js'
import { add } from './commands/file/add.js'
import { rn } from './commands/file/rn.js'
import { remove } from './commands/file/rm.js'
import { copy } from './commands/file/copy.js'
import { move } from './commands/file/mv.js'
import { osSwitch } from './commands/os/osSwitch.js'
import { calculateHash } from './commands/hash/calculate-hash.js'
import { compressFile } from './commands/zip/compress.js'

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
      await move(line, copy, remove)
      break
    case 'rm':
      await remove(line)
      break
    case 'os':
      await osSwitch(line)
      break
    case 'hash':
      await calculateHash(line)
      break
    case 'compress':
      await compressFile(line)
      break

    case '.exit':
      rl.close()
      process.exit()

    default:
      console.log('Invalid input')
      break
  }
}
