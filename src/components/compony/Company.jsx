import React from 'react'
import imgBackgroudSf from '../../image/353399350_137125962717203_6462137882169683759_n.jpg'
import './Company.css'

export default function Company() {
  return (
    <>
    <div className='container-company'>
    <img src={imgBackgroudSf} alt="" className='w-100 img-backGroud-sf' />
    <div>
      <h1>SF - Technologies</h1>
      <p>Công ty bất ổn - Nơi hội tụ những con người bất ổn.</p>
    </div>
    </div>
    </>
  )
}
