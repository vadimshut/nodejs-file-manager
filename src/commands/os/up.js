import {dirname} from 'path'
import {cwd, chdir} from 'process'
export const up = () => {
    const upperPath = dirname(cwd())
    chdir(upperPath)
}