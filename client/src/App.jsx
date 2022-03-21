import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import Home from './pages/Home'
import { fetchUserInfo } from './redux/userInfo/userInfoActions'

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchUserInfo('devCluna'))
  },[])

  return (
    <div className="App">
      <Home/>
    </div>
  )
}

export default App
