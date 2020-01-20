import fireEvent from './fireEvent'
import sleep from './sleep'

export default async function waitAndFire(name, data) {
  const results = await fireEvent(name, data)
  if (results.length === 0) {
    await sleep(100)
    return await waitAndFire(name, data)
  }

  return results
}
