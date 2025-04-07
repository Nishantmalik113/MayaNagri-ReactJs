import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import Shop from './components/Shop'
import Accessories from './components/Accessories'
import Authentication from './components/Authentication'
import Search from './components/Search'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'

function App() {
  const[page , setPage] = useState('hero')
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  return (
    <BrowserRouter>
    <Header/>
    <Navbar setPage={setPage} page={page} />
      <Routes>
        <Route path ='/' element={<Hero setPage={setPage}/>}/>
        <Route path='/shop' element={<Shop setPage={setPage}/>}/>
        <Route path='/accessories' element={<Accessories setPage={setPage}/>}/>
        <Route path='/login' element={<Authentication setPage={setPage}/>}/>
        <Route path='/search' element={<Search setPage={setPage}/>}/>
        <Route path='/cart' element={<Cart setPage={setPage}/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
