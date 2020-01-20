import {useEffect} from 'react'
import {addListener, removeListener} from './store'

export default function(name, func, differs) {
  useEffect(() => {
    addListener(name, func)
    return () => {
      removeListener(name, func)
    }
  }, differs)
}
