import { rename } from 'node:fs/promises'
import { checkFileForExistence } from '../../utils/utils.js'
import { dirname, join } from 'node:path'
import { rm } from 'fs/promises'

export const remove = async (line) => {
  const commandList = line.split(' ')
  if (commandList.length !== 2) {
    console.log('Operation failed')
    return
  }

  const pathToFile = commandList[1]
  const { verdict, fullPath } = await checkFileForExistence(pathToFile)
  if (!verdict) {
    console.log('Operation failed')
    return
  }

  try {
    await rm(fullPath)
  } catch (error) {
    console.log('Operation failed')
    return
  }
}
