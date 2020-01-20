const listeners = {}

export const addListener = (eventName, func) => {
  listeners[eventName] = listeners[eventName] || []
  listeners[eventName].push(func)
}

export const removeListener = (eventName, func) => {
  listeners[eventName] = listeners[eventName] || []
  const index = listeners[eventName].indexOf(func)
  if (index > -1) {
    listeners[eventName].splice(index, 1)
  }
}

export const getListeners = eventName => {
  return listeners[eventName] || []
}
