import React, { Component, useEffect, useState } from "react";

import "./LegCurl.css";

export function LegCurl() {
  return (
    <div>
      <h1 className='title_style'>Leg Curls</h1>
      <div class="ratio ratio-16x9">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/OGUXDQ8fmcE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <text className="subtitle_style">Leg curls target the hamstrings (biceps femoris, semitendinosus, and semimembranosus) and calf muscles (gastrocnemius and soleus muscles). When lowering your feet back down, your buttocks (gluteus muscles), thighs (quadriceps), and front of the shins (tibialis anterior) are activated too.</text>
      
    </div>
  )
}
