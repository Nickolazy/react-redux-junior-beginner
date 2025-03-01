import { useState, useEffect } from "react"
import { BrowserRouter as Router } from "react-router-dom"

import Loading from "./components/Loading"
import Authorization from "./components/Authorization"
import CurrentPage from "./components/CurrentPage"

const TIME_OF_LOADING = 1500
function App() {
  const [isLoading, setLoading] = useState(true)
  const [isAuth, setAuth] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, TIME_OF_LOADING)
  }, [])

  return (
    <Router basename="/react-redux-junior-beginner">
      { isLoading ? <Loading /> : 
        isAuth ? <CurrentPage /> : 
        <Authorization setAuth={setAuth}/>
        }
    </Router>
  )
}

export default App
