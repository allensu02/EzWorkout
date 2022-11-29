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
      </div>


    </div>
  )
}
