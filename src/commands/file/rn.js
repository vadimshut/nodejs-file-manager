import { rename } from 'node:fs/promises'
import { checkFileForExistence } from '../../utils/utils.js'
import { dirname, join } from 'node:path'
import { readdir } from 'fs/promises'

export const rn = async (line) => {
  const commandList = line.split(' ')
  if (commandList.length !== 3) {
    console.log('Operation failed')
    return
  }

  const pathToFile = commandList[1]
  const newFileName = commandList[2]

  const { verdict, fullPath: fullPathToOldFile } = await checkFileForExistence(
    pathToFile,
  )

  if (!verdict) {
    console.log('Operation failed')
    return
  }

  const fullPathToOldDirectory = dirname(fullPathToOldFile)

  try {
    const fileList = await readdir(fullPathToOldDirectory)
    if (fileList.includes(newFileName)) {
      throw new Error()
    }
  } catch {
    console.log('Operation failed')
    return
  }

  const fullPathToNewFile = join(dirname(fullPathToOldFile), newFileName)

  try {
    await rename(fullPathToOldFile, fullPathToNewFile)
  } catch {
    console.log('Operation failed')
    return
  }
}
