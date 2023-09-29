import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>Avengers Endgame</h1>
        <div className='banner_buttons'>
            <button className='button' id='play'>Play</button>
            <button className='button'>More Info</button>
        </div>
        <h1 className='description'>The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios' grand conclusion to..</h1>
      </div>
      <div className='fade_bottom' ></div>
    </div>
  )
}

export default Banner
