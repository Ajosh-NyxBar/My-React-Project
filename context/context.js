import React, { useContext, useReducer } from "react"
import { COLLAPSE_MENU } from "../utilts/action"
import reducer from '../reducers/statsReducer'

const StatsContext = React.createContext()

export const ContextProvider = ({ children }) => {

    const initialState = {
        collapsed: false
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    const collapseMenu = () => {
        dispatch({
            type: COLLAPSE_MENU
        })
    }

    console.log("Context state:", state); 
    return (
        <StatsContext.Provider value={{...state, collapseMenu}}>
            {children}
        </StatsContext.Provider>
    )
}

export const useStatsContext = () => {
    return useContext(StatsContext)
}