import { homedir } from 'os'
import { dirname } from 'path'

export const goHomeDirectory = () => {
  const homeDirectory = homedir()
  process.chdir(homeDirectory)
  return homeDirectory
}
