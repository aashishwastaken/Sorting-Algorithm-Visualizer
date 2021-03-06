import React, { useEffect, useState } from 'react';
import Icon from '@material-ui/core/Icon';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import InputSlider from './components/InputSlider';
import Bar from './components/Bar';
import './App.css';
import Header from './components/Header';
import AlgosDropdown from './components/AlgosDropdown';
import bubbleSort from './algorithms/bubbleSort';
// import bubbleSort from './algorithms/bubbleSort';


function App() {
  const [len, setLen] = useState(30);
  let [swapIndex, setSwapIndex] = useState([-1, -1]);
  let [ar, setAr] = useState([]);
  let [bars, setBars] = useState(<div></div>);

 
  useEffect(() => {
    setAr(Array.from({ length: len }, () => Math.floor(Math.random() * 100)));
    setSwapIndex([-1, -1]);
  }, [len]);

  useEffect(() => {
    setBars(ar.map((x, i) => {
      return <Bar i={i} val={x} max={100} len={len} refs={swapIndex} />
    }));
    //setSwapIndex([-1,-1]);
  }, [ar, len, swapIndex]);


  console.log('ar', ar);

  
  return (
    <div className="App">
      <Header />
      <div className="row secondary-header" >
        <AlgosDropdown />
        <InputSlider setVal={(val) => setLen(val)} />

        <button
          className="btn"
          onClick={() => bubbleSort(ar, len, setAr,setSwapIndex)}
        >
          <PlaylistPlayIcon /> Sort
      </button>
      </div>

      <div className="row">
        {
          bars
        }
      </div>
    </div>
  );
}

export default App;
