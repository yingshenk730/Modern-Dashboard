import { initCalculatedField } from '@syncfusion/ej2/pivotview'
import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()

const initialState = {
  chat: false,
  cart: false,
  useProfile: false,
  notification: false,
}

export const ContextProvider = ({ children }) => {

  const [activeMenu, setActiveMenu] = useState(true)
  const [isClicked, setIsClicked] = useState(initialState)
  const [screenSize, setScreenSize] = useState(undefined)
  const [currentColor, setCurrentColor] = useState('#03c9d7')
  const [currentMode, setCurrentMode] = useState('Light')
  const [themeSettings, setThemeSettings] = useState(false)

  const setMode = (mode) => {
    setCurrentMode(mode)
    localStorage.setItem('themeMode', mode)
    setThemeSettings(false)
  }

  const setColor = (color) => {
    setCurrentColor(color)
    localStorage.setItem('colorMode', color)
    setThemeSettings(false)
  }
  const handleClick = (clicked) => {
    setIsClicked({ ...initCalculatedField, [clicked]: true })
  }
  return (
    <StateContext.Provider value={{
      activeMenu,
      setActiveMenu,
      isClicked,
      setIsClicked,
      handleClick,
      screenSize,
      setScreenSize,
      currentColor,
      setCurrentColor,
      currentMode,
      setCurrentMode,
      themeSettings,
      setThemeSettings,
      setMode,
      setColor
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);

