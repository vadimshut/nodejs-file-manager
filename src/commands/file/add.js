import { open } from 'fs/promises'
import { join } from 'node:path'
import { cwd } from 'process'

export const add = async (line) => {
  const commandList = line.split(' ')
  if (commandList.length !== 2) {
    console.log('Operation failed')
    return
  }

  const fileName = commandList[1]

    // try {
    //   await fs.writeFile(join(cwd(), fileName), { flag: 'wx' })
    // } catch {
    //   console.log('Operation failed')
    // }
  let filehandle
  const pathToNewFile = join(cwd(), fileName)
  
  try {
    filehandle = await open(pathToNewFile, 'wx')
  } catch {
    console.log('Operation failed')
  } finally {
    await filehandle?.close()
  }
}
