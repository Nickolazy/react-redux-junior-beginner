import React from "react"
import { Routes, Route } from "react-router-dom"

import Home from "./Pages/Home"

import NavPanel from "./NavPanel"

const CurrentPage = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>

      <NavPanel />
    </div>
  )
}

export default CurrentPage
