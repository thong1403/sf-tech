import React from 'react'
import Products from '../Products/Products'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../MainPage/MainPage'
import './HomePages.css'

export default function HomePage() {
  return (
    <div className='router-pages'>
      <Routes>
        <Route path='/product' element={<Products/>}/>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </div>
  )
}
