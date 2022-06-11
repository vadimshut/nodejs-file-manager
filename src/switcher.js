import {up} from './commands/os/up.js'

export const commandSwitcher = (rl, line) => {
    switch (line.trim()) {
        case 'up':
          up()
          break
        case 'cd':
          console.log('Coomand: ', line.trim())
          break
        case 'ls':
          console.log('Coomand: ', line.trim())
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