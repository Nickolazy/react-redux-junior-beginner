import { useState, useEffect } from "react"
import { BrowserRouter as Router } from "react-router-dom"


import { useSelector } from "react-redux"

import Loading from "./components/Loading"
import Authorization from "./components/Authorization"
import CurrentPage from "./components/CurrentPage"

const TIME_OF_LOADING = 1500

function App() {
  const isAuthorized = useSelector((state) => state.pinCode.isAuthorized)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, TIME_OF_LOADING)
  }, [])

  return (
    <Router basename="/react-redux-junior-beginner">
      {isLoading ? <Loading /> : isAuthorized ? <CurrentPage /> : <Authorization />}
    </Router>
  )
}

export default App
