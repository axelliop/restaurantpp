import DetailApp from './DetailApp'
import MenuCard from './MenuCard'
import React from 'react'
import menu from './menu.json'

const LandingPage = () => {
  return (
    <div className="App">

    <h1 className="primary">Hola! soy un restaurant</h1>
    {menu.map((item) => ( <MenuCard key={item.id} item={item}/>

    ))}
       </div>
  )
}

export default LandingPage