export const move = async (line, copy, remove) => {
  const commandList = line.split(' ')
  if (commandList.length !== 3) {
    console.log('Operation failed')
    return
  }

  const pathToFile = commandList[1]
  const pathToNewDirectory = commandList[2]
  try {
    await copy(`cp ${pathToFile} ${pathToNewDirectory}`)
    await remove(`cp ${pathToFile}`)
  } catch {
    console.log('Operation failed')
    return
  }
}
