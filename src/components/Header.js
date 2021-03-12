import React from 'react';
import LaunchIcon from '@material-ui/icons/Launch';

import header from '../assets/header.jpg';
import algoIcon from '../assets/favicon.png';
import '../App.css';
export default function Header() {
    return (
        <div className="container"  >
            <div className="header-text"><img src={algoIcon} alt="Algo-Icon" className="algo-image" /> Algorithms Visualizer</div>
            <img src={header} alt="header" className="header-image" />
            <a href="https://github.com/aashishwastaken/Sorting-Algorithm-Visualizer"
                target="_blank" rel="noreferrer" >
                <div className="button">GitHub<LaunchIcon style={{fontSize:"1em",width:'em'}} />
                </div>
            </a>

        </div>
    )
}
