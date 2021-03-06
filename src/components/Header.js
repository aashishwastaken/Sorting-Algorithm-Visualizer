import React from 'react';
import LaunchIcon from '@material-ui/icons/Launch';

import header from '../assets/header.jpg';
import '../App.css';
export default function Header() {
    return (
        <div class="container"  >
            <div class="headerText">Algorithms Visualizer </div>
            <img src={header} alt="header" style={{ width: "35%", height: "12vh", float:'right' }} />
            <a href="https://github.com/aashishwastaken/Sorting-Algorithm-Visualizer"
                target="_blank" rel="noreferrer" >
                <div className="button">GitHub<LaunchIcon style={{fontSize:"1em"}} />
                </div>
            </a>

        </div>
    )
}
