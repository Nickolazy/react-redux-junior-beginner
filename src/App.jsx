import { useState, useEffect } from "react"
import Loading from "./components/Loading"
import Authorization from "./components/Authorization"
import Home from "./components/Pages/Home"

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
    <>
      <div className="w-screen h-screen">
        { isLoading ? <Loading /> : 
          isAuth ? <Home /> : 
          <Authorization setAuth={setAuth}/>
          }
      </div>

      <hr className='md:hidden absolute bottom-2 left-1/3 w-1/3 border-[3px] text-white rounded-full' />
    </>
  )
}

export default App
