import { createReadStream } from 'fs'
import { checkFileForExistence } from '../../utils/utils.js'
import { cwd } from 'process'
import { EOL } from 'os'

export const cat = async (line, rl) => {
  const commandList = line.split(' ')
  if (commandList.length !== 2) {
    console.log('Operation failed')
    return
  }

  const pathToFile = commandList[1]
  const { verdict, fullPath } = await checkFileForExistence(pathToFile, true)

  if (!verdict) {
    console.log('Operation failed')
    return
  }

  const rs = createReadStream(fullPath, 'utf8')
  let readIsCorrect = false

  rs.on('readable', () => {
    const data = rs.read()
    if (data !== null) {
      console.log(data)
    }
  })

  rs.on('end', () => {
    readIsCorrect = true
  })

  rs.on('close', () => {
    if (readIsCorrect) {
      rl.setPrompt(`You are currently in ${cwd()} ${EOL}> `)
      rl.prompt()
    } else {
      console.log('Operation failed')
    }
  })

  rs.on('error', () => {
    console.log('Operation failed')
  })
}
