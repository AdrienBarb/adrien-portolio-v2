import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from '../context/globalContext'

function useKonamiCode(defCode = [37, 37, 39, 39, 13]) {
  const refIndex = useRef(0)
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()
  // State for keeping track of konami state
  const [konamiCode, setIsKonami] = useState(false)
  const codes = useMemo(function memoizeDefCode() {
    return defCode
  }, [])

  function onKeyUp(evt) {
    let currRef = refIndex.current,
      codesLen = codes.length - 1,
      { keyCode } = evt
    if (currRef === codesLen) {
      setIsKonami(true)
    }
    if (
      keyCode != null &&
      codes[currRef] != null &&
      keyCode === codes[currRef]
    ) {
      refIndex.current++
    } else {
      refIndex.current = 0
      setIsKonami(false)
    }
  }

  const onKeyUpCallback = useCallback(
    function useCallbackOnKeyUp(evt) {
      onKeyUp(evt)
    },
    [codes, refIndex]
  )

  // Add event listeners
  useEffect(
    function attachKonamiEffect() {
      window.addEventListener('keyup', onKeyUpCallback, true)
      return function removeKonamiEffect() {
        window.removeEventListener('keyup', onKeyUpCallback, true)
      }
    },
    [onKeyUpCallback]
  )

  useEffect(() => {
    if (konamiCode) {
      if (currentTheme === 'dark') {
        dispatch({ type: 'TOGGLE_THEME', theme: 'light' })
      } else {
        dispatch({ type: 'TOGGLE_THEME', theme: 'dark' })
      }
    }
  }, [konamiCode])

  console.log(konamiCode)

  return [konamiCode, setIsKonami]
}

export default useKonamiCode
