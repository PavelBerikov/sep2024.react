import './App.css'
import Posts from './components/posts/Posts'
import Users from './components/users/Users'


function App() {
  return (
    <div style={{display: 'flex'}}>
        <Posts/>
        <Users/>
    </div>
  )
}

export default App
