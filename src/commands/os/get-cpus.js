import { cpus } from 'os'

export const getCpus = async () => {
  const cpusInfo = cpus().map(({ model, speed }) => {
    return { model, speed: speed / 1000 }
  })
  console.log(`CPUS total: ${cpusInfo.length}`)
  console.table(cpusInfo)
}
