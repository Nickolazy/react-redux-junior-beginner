import React from 'react'

const NavPanel = ({activePage}) => {
  const path = "src/assets/icons/nav/";
  const nav = {
    coin: 'Coin.svg',
    operations: 'Operations.svg',
    Home: 'Home.svg',
    card: 'Card.svg',
    settings: 'Settings.svg'
  }

  return (
    <div className='flex justify-evenly py-10'>
      {Object.keys(nav).map((key) => {
        const isActive = activePage === key;
        
        return (
          <div key={key} className={`${isActive ? 'nav-item active' : 'nav-item'} select-none`}>
            <button>
              <img src={path + nav[key]} alt={key} className='size-10'/>

              {isActive ? <span className='size-7'>{key}</span> : ""}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default NavPanel
