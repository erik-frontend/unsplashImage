import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const [serchItme, setSerchItme] = useState("wallpapers")

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme
        setIsDarkTheme(newDarkTheme)
        document.body.classList.toggle("dark-theme", newDarkTheme)
    }

    return (
        <AppContext.Provider value={{
            isDarkTheme,toggleDarkTheme,setSerchItme,serchItme
        }}>
        {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)