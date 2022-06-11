import {dirname} from 'path'
import {getCwd} from '../../getCwd.js'
export const up = () => {
    const upperPath = dirname(getCwd())
    process.chdir(upperPath)
}