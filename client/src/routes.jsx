import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginAdmin from './pages/LoginAdmin'
import SignUp from '.pages/SignUp'

const routes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginAdmin />} />
        <Route path="/signup" element={<SignUp />} />
    </Routes>
    </>
  )
}

export default routes