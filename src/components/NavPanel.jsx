import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavPanel = () => {
  const path = "src/assets/icons/nav/"
  const pathActive = "src/assets/icons/nav/active/"

  const nav = {
    coins: 'Coin.svg',
    operations: 'Operations.svg',
    home: 'Home.svg',
    cards: 'Card.svg',
    settings: 'Settings.svg'
  }

  const location = useLocation()
  const currentPath = location.pathname.split("/")[1]

  const upperFirstLetter = (key) => {
    return key.charAt(0).toUpperCase() + currentPath.slice(1);
  }

  return (
    <div className='flex justify-around items-end py-10'>
      {Object.keys(nav).map((key) => {
        const isActive = currentPath === key
        
        return (
          <Link to={`/${key.toLowerCase()}`} key={key} className='flex flex-col items-center select-none'>

            <img src={isActive ? pathActive + nav[key] : path + nav[key]} alt={key} className='size-16 hover:-translate-y-2.5 p-1.5 
            active:scale-90 transition duration-300'/>

            {isActive ? <span className='text-sm'>{upperFirstLetter(key)}</span> : ""}

          </Link>
        )
      })}
    </div>
  )
}

export default NavPanel
