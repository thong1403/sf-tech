import React from 'react'
import Products from '../Products/Products'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../MainPage/MainPage'
import './HomePages.css'
import Portfolio from '../Portfolio/Portfolio'
import ContactUs from '../ContactUs/ContactUs'
import Company from '../compony/Company'

export default function HomePage() {
  return (
    <div className='router-pages'>
      <Routes>
        <Route path='/product' element={<Products/>}/>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/company' element={<Company/>}/>
      </Routes>
    </div>
  )
}
