import React from 'react'
import './Welcome.css'

export function Welcome() {
  return (
    <div className='welcome_container'> 

      <div>
        <h1 className='title_style'>
          Welcome to EzWorkout!
        </h1>
        <a href="/#/LegCurl" className='button_style'>
          Leg Curls
        </a>
        <a href="/#/TricepsExtension" className='button_style'>
          Triceps Extension
        </a>
        <a href="/#/MultiPressShoulder" className='button_style'>
          Multi Press Shoulder
        </a>
      </div>


    </div>
  )
}
