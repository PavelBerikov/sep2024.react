import { useState } from 'react'
import './App.css'
import Left from './components/left/Left'
import Right from './components/right/Right'
import { MyContext } from './context/MyContext'

function App() {
    const [trigger, setTrigger] = useState<boolean>(false)
  return (
    <div>
        <MyContext.Provider value={{trigger, setTrigger}}>
            <Left/>
            <Right/>
        </MyContext.Provider>
    </div>
  )
}

export default App
