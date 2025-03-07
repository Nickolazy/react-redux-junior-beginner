import React from "react"
import { Routes, Route } from "react-router-dom"

import Coins from "./Pages/Coins"
import Operation from "./Pages/Operation"
import Home from "./Pages/Home"
import Cards from "./Pages/Cards"
import Settings from "./Pages/Settings"

import NavPanel from "./NavPanel"

const CurrentPage = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Routes>
        <Route path="/coins" element={<Coins />} />
        <Route path="/operation" element={<Operation />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>

      <NavPanel />
    </div>
  )
}

export default CurrentPage
