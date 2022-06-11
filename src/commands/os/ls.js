import { readdir } from 'fs/promises'
import { cwd } from 'process'

export const ls = async () => {
  try {
    const fileList = await readdir(cwd())
    const modificatedFileList = fileList.map((item) => {
      return { FolderName: item }
    })
    console.log('\n')
    console.table(modificatedFileList, ['FolderName'])
  } catch (err) {
    console.log('Operation failed')
  }
}
