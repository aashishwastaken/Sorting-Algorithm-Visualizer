import React from 'react';

import header from '../assets/header.jpg';
import '../App.css';
export default function Header() {
    return (
      <div class="container"  >
<img src={header} alt="header" style={{width:"35%", height:"12vh", float:'right'}} />

<div class="centered">Algorithms Visualizer</div>
</div>
    )
}
