import { createHash } from 'crypto'
import { createReadStream } from 'fs'
import { checkFileForExistence } from '../../utils/utils.js'

const getHash = (fileName) => {
  return new Promise((resolve, reject) => {
    const hash = createHash('sha256')
    const rs = createReadStream(fileName)

    rs.on('data', (chunk) => hash.update(chunk))
    rs.on('end', () => {
      const digest = hash.digest('hex')
      resolve(digest)
    })
    rs.on('error', reject)
  })
}

export const calculateHash = async (line) => {
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
      const hashValue = await getHash(fullPath)
      console.log(`Hash: ${hashValue}`);
  } catch {
    console.log('Operation failed')
  }
}
