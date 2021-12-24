import {getListeners} from './store'

export default async function (name: string, data: any) {
  const listeners = getListeners(name)

  let results = []
  for (const listener of listeners) {
    const result = await listener(data)
    results.push(result)
  }

  return results
}
