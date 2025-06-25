import React from 'react'
import { useGlobalContext } from './context'
import { IoMdSunny, IoMdMoon } from "react-icons/io";

const ThemeToggle = () => {

  const { isDarkTheme, toggleDarkTheme } = useGlobalContext()

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ?
          (<IoMdMoon className="toggle-icon" />) :
          (<IoMdSunny className="toggle-icon" />)
        }
      </button>
    </section>
  )
}

export default ThemeToggle