  import React from 'react'
  import { useState, useEffect } from 'react'
  import { useNavigate } from 'react-router-dom'

  import { useDispatch, useSelector } from 'react-redux'
  import { appendNum, removeNum, resetPin, checkPin } from '../Store/Slices/pinCode'

  const Authorization = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const pinCode = useSelector((state) => state.pinCode.value)
    const pinCodeMaxLength = useSelector((state) => state.pinCode.pinCodeMaxLength)
    const isAuthorized = useSelector((state) => state.pinCode.isAuthorized)

    const [shake, setShake] = useState(false)
    const numberField = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, "Back", 0, "Clear"
    ]

    useEffect(() => {
      if (isAuthorized) {
        navigate("/home")
      } else if (pinCode.length === pinCodeMaxLength) {
        dispatch(resetPin())

        setShake(true)
        
      }
    }, [isAuthorized])

    const handlePinCode = (num) => {
      if (!isNaN(Number(num))) {
        if (pinCode.length < 4) {
          dispatch(appendNum(num))
        }
        if (pinCode.length === 3) {
          setTimeout(() => {
            dispatch(checkPin())
            navigate("/home")
          }, 0);
        }
      } else if (num === "Back") {
        dispatch(removeNum());

      } else if (num === "Clear") {
        dispatch(resetPin());

      }
    }

    return (
      <div className='h-screen flex flex-col items-center justify-center gap-y-10 p-14'>
        <img src=".\src\assets\icons\auth\Coin_black.svg" className='dark:hidden' />
        <img src=".\src\assets\icons\auth\Coin_white.svg" className='hidden dark:block' />

        <h1>
          Enter your Pin
        </h1>

        <div className='flex gap-8 my-12 md:my-16'>
          { Array(4).fill().map((_, index) => (
            <div key={index} className={ `${pinCode.length > index ? 'bg-white' : 'bg-yellow'}
              ${shake ? 'shake' : ''} size-4 rounded-full duration-300 transition-colors` }></div>
          )) }
        </div>

        <div className='grid grid-cols-3 gap-x-8 gap-y-5'>
          { numberField.map((btnValue, index) => (
            <button key={index} onClick={() => handlePinCode(btnValue)} 
              className={ `${ typeof btnValue === 'number' ? 'text-3xl font-medium' : 'text-lg font-normal' } px-2 py-3 md:px-5 md:py-6 active:bg-white dark:active:bg-darker rounded-full select-none` }
            >
              { btnValue }
            </button>
          )) }
        </div>
      </div>
    )
  }

  export default Authorization
