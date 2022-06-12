import {
  checkFileForExistence,
  checkPathForExistence,
} from '../../utils/utils.js'
import { join, parse } from 'node:path'
import { pipeline } from 'stream'
import { createWriteStream, createReadStream } from 'fs'
import { promisify } from 'util'
import { open } from 'fs/promises'

export const copy = async (line) => {
  const commandList = line.split(' ')
  if (commandList.length !== 3) {
    console.log('Operation failed')
    return
  }

  const pathToFile = commandList[1]
  const pathToNewDirectory = commandList[2]

  const {
    verdict: verdictFile,
    fullPath: fullPathToFile,
  } = await checkFileForExistence(pathToFile)

  const {
    verdict: verdictNewDirecotory,
    fullPath: fullPathToNewDirectory,
  } = await checkPathForExistence(pathToNewDirectory)

  if (!verdictFile || !verdictNewDirecotory) {
    console.log('Operation failed')
    return
  }
  const { name, ext } = parse(fullPathToFile)
  const fileName = name + ext
  const fullPathToNewFile = join(fullPathToNewDirectory, fileName)

  let filehandle
  try {
    filehandle = await open(fullPathToNewFile, 'wx')
  } catch {
    console.log('Operation failed')
    return
  } finally {
    await filehandle?.close()
  }

  const pipe = promisify(pipeline)
  const source = createReadStream(fullPathToFile)
  const destination = createWriteStream(fullPathToNewFile)
  try {
    await pipe(source, destination)
  } catch {
    console.log('Operation failed')
    return
  }
}
