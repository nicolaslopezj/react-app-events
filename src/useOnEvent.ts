import {useEffect} from 'react'
import {addListener, removeListener} from './store'

export default function useOnEvent(name: string, func: Function, differs: any = null) {
  useEffect(() => {
    addListener(name, func)
    return () => {
      removeListener(name, func)
    }
  }, differs)
}
