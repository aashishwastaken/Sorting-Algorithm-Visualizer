import React, { useEffect, useState } from 'react';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import InputSlider from './components/InputSlider';

import Bar from './components/Bar';
import './App.css';
import Header from './components/Header';
import AlgosDropdown from './components/AlgosDropdown';
import bubbleSort from './algorithms/bubbleSort';
import quickSort from './algorithms/quickSort';
import mergeSort from './algorithms/mergeSort';
import insertionSort from './algorithms/insertionSort';

function App() {
  const [len, setLen] = useState(30);
  let [swapIndex, setSwapIndex] = useState([-1, -1]);
  let [ar, setAr] = useState([]);
  let [bars, setBars] = useState(<div></div>);
  let [slider, setSlider] = useState(null);
  let [algo, setAlgo] = useState('Bubble Sort');

  let onSort=()=>{
    if(algo==='Bubble Sort')
      bubbleSort(ar, len, setAr,setSwapIndex);
    else if(algo==='Quick Sort')
      quickSort(ar, len, setAr,setSwapIndex);
    else if(algo==='Merge Sort')
      mergeSort(ar, len, setAr,setSwapIndex);
    else if(algo==='Insertion Sort')
      insertionSort(ar, len, setAr,setSwapIndex);
  }

  useEffect(()=>{
setSlider(<InputSlider setVal={(val) => setLen(val)} />)
  },[]);
 
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
        <AlgosDropdown algo={algo} setAlgo={setAlgo} />
        {
          slider
        }

        <button
          className="btn"
          onClick={() =>onSort()}
        >
          <PlaylistPlayIcon /> Sort
      </button>
      </div>

      <div className="row">
        {
          bars
        }
      </div>
      <p id="foot-note">Imagined by UnEmployed Alumni</p>
    </div>
  );
}

export default App;
