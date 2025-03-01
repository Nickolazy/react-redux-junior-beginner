import React from 'react'

const HomePage = () => {
  const photo = <><img src='./src/assets/img/photo.png' alt='' /></>
  return (
    <div className='relative'>
      <div className='absolute top-0 w-full h-40 md:h-52 bg-light'></div>

      <div className='size-16 rounded-full overflow-hidden'>
        { photo }
      </div>
    </div>
  )
}

export default HomePage
