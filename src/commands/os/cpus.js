import {cpus} from 'process'

export const getCpus = async () => {
    console.log(cpus);
}