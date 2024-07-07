import React, { useContext } from "react";

const ThemeContext = React.createContext()

export const ThemeProvider = ({children}) =>{

    return (
        <ThemeContext.Provider value={'Hello World'}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () =>{
    return useContext(ThemeContext)
}
