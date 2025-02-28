import React from 'react'
import NavPanel from '../NavPanel'

const HomePage = () => {
  return (
    <div className='size-full flex flex-col justify-between'>
      <div className='my-auto text-3xl font-bold flex justify-center'>
        ПРИВЕТ, САЧКА
      </div>
      
      <NavPanel />
    </div>
  )
}

export default HomePage
