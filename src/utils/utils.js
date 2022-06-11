import { access } from 'fs/promises'
import { stat } from 'fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { isAbsolute } from 'path'
import { cwd } from 'process'

export const getPathFromFile = (url, fileName) => {
  const __filename = fileURLToPath(url)
  const __dirname = dirname(__filename)

  const filePath = join(__dirname, 'files', fileName)

  return filePath
}

const calculateRelativePath = (path) => {
  let fullPath
  let sepparator
  try {
    if (path.startsWith('.')) {
      fullPath = join(cwd(), path.slice(1))
    }

    const sepparator1 = /\\/
    const sepparator2 = /\//

    sepparator1.test(path) && (sepparator = '\\')
    sepparator2.test(path) && (sepparator = '/')

    if (path.startsWith('..')) {
      fullPath = dirname(cwd())
      const pathList = path.split(sepparator).slice(1)

      const partsOfPath = pathList.reduce((acc, item, idx, arr) => {
        item === '..' && (idx === 0 || arr[idx] === arr[idx - 1])
          ? (fullPath = dirname(fullPath))
          : acc.push(item)
        return acc
      }, [])
      fullPath = join(fullPath, ...partsOfPath)
    } else {
        fullPath = join(cwd(), path)
    }
  } catch {
    console.log('Operation failed')
  }

  return fullPath
}

const calculatePath = (path) => {
  return isAbsolute(path) ? path : calculateRelativePath(path)
}

export const checkPathForExistence = async (path, shouldExist = true) => {
  const fullPath = calculatePath(path)

  try {
    await access(fullPath)
    const stats = await stat(fullPath)
    if (!stats.isDirectory()) {
        return {verdict: false, error: true, fullPath}
    }
    return shouldExist
      ? { verdict: true, error: false, fullPath }
      : { verdict: false, error: false, fullPath }
  } catch (error) {
    return shouldExist
      ? { verdict: false, error: false, fullPath }
      : { verdict: true, error: false, fullPath }
  }
}

export const checkFileForExistence = async (path) => {

}