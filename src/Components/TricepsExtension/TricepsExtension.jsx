import React, { Component, useEffect, useState } from "react";

import "./TricepsExtension.css";

export function TricepsExtension() {
  return (
    <div>
      <h1 className='title_style'>Triceps Extensions</h1>
      <div class="ratio ratio-16x9">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/hI6-vRtYTec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      </div>
      <text className="subtitle_style">The triceps extension is an isolation exercise that works the muscle on the back of the upper arm.1
This muscle, called the triceps, has three heads: the long head, the lateral head, and the medial head. The three heads work together to extend the forearm at the elbow joint. The triceps extension exercise is an isolation exercise because it involves movement in only one joint, the elbow joint.</text>
      
    </div>
  )
}
