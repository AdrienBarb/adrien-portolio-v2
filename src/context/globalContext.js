import React, { createContext, useReducer, useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby';

 const GlobalStateContext = createContext()
 const GlobalDispatchContext = createContext()

 const globalReducer = (state, action) => {
     switch(action.type) {
         case 'TOGGLE_THEME': {
             return {
                 ...state,
                 currentTheme: action.theme
             }
         }
         default: {
             throw new Error(`Unhandled action type: ${action.type}`)
         }
     }
 }

 export const GlobalProvider = ({children}) => {
        const data = useStaticQuery(graphql`
        query {
        allContentfulProject (
            sort: {
            fields: [updatedAt]
            order: DESC
            }
        ) {
            edges {
            node {
                title
                slug
            }
            }
        }
        }
    `)

     const [state, dispatch] = useReducer(globalReducer, {
         currentTheme: 'dark', 
         dataTest: data.allContentfulProject.edges
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