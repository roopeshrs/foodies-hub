import React from 'react'
import Routing from './utils/Routing'
import { useSelector } from 'react-redux'

const App = () => {
  const darkMode = useSelector(state => state.app.isDarkMode);
  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <Routing />
    </div>
  )
}

export default App