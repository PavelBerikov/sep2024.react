import { useState } from 'react'
import './App.css'
import LeftBranch from './components/LeftBranch'
import RightBranch from './components/RightBranch'
import { MyContext, init } from './context/MyContext'

function App() {
    const [counter, setCounter] = useState(init.counterValue)
  return (
    <>
        <MyContext.Provider value={{
            counterValue:counter,
            increment: (obj) => {
                setCounter(++obj)
                console.log(obj)
            }
        }}>
        <LeftBranch/>
        <RightBranch/>
        </MyContext.Provider>
    </>
  )
}

export default App
