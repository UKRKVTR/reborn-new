import './style.css'
import React from 'react'

function Home () {
  return (
    <div className='homePage'>
      <div className='baners'>
        <div className='image'>
          <img
            src='/leftpng.png'
            alt='leftImg'
            className='leftImg'
            draggable='false'
          />
          <img
            src='/god.svg'
            draggable='false'
            alt='godImg'
            className='godImg'
          />
          <img
            src='/leftpng.png'
            alt='rightImg'
            className='rightImg'
            draggable='false'
          />
        </div>
      </div>
    </div>
  )
}

export default Home
