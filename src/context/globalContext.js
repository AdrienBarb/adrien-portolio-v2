import React, { createContext, useReducer, useContext, useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

export const globalReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      return {
        ...state,
        currentTheme: action.theme,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const GlobalProvider = ({ children }) => {
  // const [key, setKey] = useState(null)

  // useEffect(() => {
  //   setKey(localStorage.getItem('themeColor'))
  // })

  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme: window !== 'undefined' ? localStorage.getItem('themeColor') : null,
  })

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

export const useGlobalStateContext = () => useContext(GlobalStateContext)
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
