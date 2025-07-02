import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const getTheme = () => {
        return localStorage.getItem("darkTheme") === "true"
    }

    const [isDarkTheme, setIsDarkTheme] = useState(getTheme())
    const [serchItme, setSerchItme] = useState("ocean")

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme
        setIsDarkTheme(newDarkTheme)
        localStorage.setItem("darkTheme", newDarkTheme)
        document.body.classList.toggle("dark-theme", newDarkTheme)
    }

    useEffect(() => {
        document.body.classList.toggle("dark-theme", isDarkTheme)
    }, [isDarkTheme])


    return (
        <AppContext.Provider value={{
            isDarkTheme, toggleDarkTheme, setSerchItme, serchItme
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)