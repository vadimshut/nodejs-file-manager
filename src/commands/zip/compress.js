import {
  checkFileForExistence,
  checkPathForExistence,
} from '../../utils/utils.js'
import { compressDecompressFile } from './utils.js'
import { parse, join } from 'path'

const EXT = '.br'

export const compressFile = async (line) => {
  const commandList = line.split(' ')
  if (commandList.length !== 3) {
    console.log('Operation failed')
    return
  }
  const pathToFile = commandList[1]
  const pathToDestination = commandList[2]

  const {
    verdict: verdictFile,
    fullPath: fullPathToFile,
  } = await checkFileForExistence(pathToFile)
  const {
    verdict: verdictDestinationPath,
    fullPath: fullDestinationPath,
  } = await checkPathForExistence(pathToDestination)

  if (!verdictFile || !verdictDestinationPath) {
    console.log('Operation failed')
    return
  }

  const { name } = parse(fullPathToFile)
  const fullPathToNewFile = join(fullDestinationPath, name + EXT)

  const {
    verdict: verdictFullPathToNewFile,
    fullPath,
  } = await checkFileForExistence(fullPathToNewFile)

  if (verdictFullPathToNewFile) {
    console.log('Operation failed')
    return
  }

  try {
    await compressDecompressFile(fullPathToFile, fullPathToNewFile)
  } catch {
    console.log('Operation failed')
  }
}
