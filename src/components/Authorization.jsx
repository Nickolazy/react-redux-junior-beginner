import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Authorization = ({setAuth}) => {
  const CODE = "6489"
  const numberField = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, "Back", 0, "Clear"
  ]

  const navigate = useNavigate()
  const [codeNum, setCodeNum] = useState("")
  const [shake, setShake] = useState(false)

  const handlePinCode = (num) => {
    setCodeNum((prevCodeNum) => {
      let newCodeNum;
      
      if (num === "Back") {
        newCodeNum = prevCodeNum.slice(0, -1)
      } else if (num === "Clear") {
        newCodeNum = ""
      } else {
        newCodeNum = prevCodeNum + num
      }

      if (newCodeNum.length === 4) {
        handleAuth(newCodeNum)

        setShake(true)
        setTimeout(() => setShake(false), 500)
      }

      return newCodeNum
    })
  }

  const handleAuth = (code) => {
    if (code === CODE) {
      setAuth(true)
      navigate("/home")
    } else {
      setCodeNum("")
    }
  }

  return (
    <div className='overflow-hidden flex flex-col items-center gap-y-10 p-14'>
      <img src="src\assets\icons\auth\Coin_black.svg" className='dark:hidden' />
      <img src="src\assets\icons\auth\Coin_white.svg" className='hidden dark:block' />

      <h1>
        Enter your Pin
      </h1>

      <div className='flex gap-8 my-16'>
        { Array(4).fill().map((_, index) => (
          <div key={index} className={ `${codeNum.length > index ? 'bg-white' : 'bg-yellow'}
            ${shake ? 'shake' : ''} size-4 rounded-full duration-300 transition-colors` }></div>
        )) }
      </div>

      <div className='grid grid-cols-3 gap-x-14 gap-y-10'>
        { numberField.map((btnValue, index) => (
          <button key={index} onClick={() => handlePinCode(btnValue)} 
            className={ `${ typeof btnValue === 'number' ? 'text-3xl font-medium' : 'text-lg font-normal' } py-6 px-5 active:bg-white dark:active:bg-darker rounded-full select-none` }
          >
            { btnValue }
          </button>
        )) }
      </div>
    </div>
  )
}

export default Authorization
