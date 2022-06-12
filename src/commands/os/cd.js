import { checkPathForExistence } from '../../utils/utils.js'
import { up } from './up.js'
import { chdir } from 'process'

export const cd = async (line) => {
  const commandList = line.split(' ').filter((item) => !!item)
  if (commandList.length !== 2) {
    console.log('Operation failed')
    return
  }

  const path = commandList[1]
  if (['..', '../', '..\\'].includes(path)) {
    up()
  } else {
    const { verdict, error, fullPath } = await checkPathForExistence(path)
    if (error || !verdict) {
      console.log('Operation failed')
      return
    }
    chdir(fullPath)
  }
}
