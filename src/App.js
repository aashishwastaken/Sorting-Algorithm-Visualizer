import React, { useEffect, useState } from 'react';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';

import SpeedSlider from './components/SpeedSlider';
import ArraySizeSlider from './components/ArraySizeSlider';
import Bar from './components/Bar';
import './App.css';
import Header from './components/Header';
import AlgosDropdown from './components/AlgosDropdown';
import Legends from './components/Legends';
import bubbleSort from './algorithms/bubbleSort';
import quickSort from './algorithms/quickSort';
import mergeSort from './algorithms/mergeSort';
import insertionSort from './algorithms/insertionSort';
import selectionSort from './algorithms/selectionSort';

function App() {
  let [len, setLen] = useState(30);
  let [speed, setSpeed] = useState(50);
  let [swapIndex, setSwapIndex] = useState([]);
  let [selectedIndex, setSelectedIndex] = useState([]);
  let [compIndex, setCompIndex] = useState([]);
  let [sortedIndex, setSortedIndex] = useState([]);
  let [ar, setAr] = useState([]);
  let [bars, setBars] = useState(<div></div>);
  let [slider, setSlider] = useState(null);
  let [algo, setAlgo] = useState('bubbleSort');

  let onSort = () => {
    if (algo === 'bubbleSort')
      bubbleSort(ar, len,speed, setAr, setSwapIndex,setCompIndex,setSortedIndex);
    else if (algo === 'selectionSort')
      selectionSort(ar, len,speed, setAr, setSwapIndex,setSelectedIndex,setCompIndex,setSortedIndex);  
    else if (algo === 'quickSort')
      quickSort(ar, len,speed, setAr, setSwapIndex,setCompIndex,setSortedIndex);
    else if (algo === 'mergeSort')
      mergeSort(ar, len,speed, setAr, setSwapIndex,setCompIndex,setSortedIndex);
    else if (algo === 'insertionSort')
      insertionSort(ar, len,speed, setAr, setSwapIndex,setSelectedIndex,setCompIndex,setSortedIndex);
  }

  useEffect(() => {
    setSlider(<><ArraySizeSlider value={len} setValue={(val) => setLen(val)} /><SpeedSlider setVal={(val) => setSpeed(val)} /></>)
  }, [len,speed]);

  useEffect(() => {
    setAr(Array.from({ length: len }, () => Math.floor(Math.random() * 100)));
    setSwapIndex([]);
    setCompIndex([]);
    setSortedIndex([]);
    setSelectedIndex([]);
  }, [len, algo,speed]);

  useEffect(() => {
    setBars(ar.map((x, i) => {
      return <Bar i={i} val={x} max={100} len={len} swapRef={swapIndex} selectedRef={selectedIndex} compRef={compIndex} sortedRef={sortedIndex} />
    }));
    //setSwapIndex([-1,-1]);
  }, [ar, len, swapIndex, selectedIndex, compIndex, sortedIndex]);




  // console.log('ar', ar);


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
          onClick={() => onSort()}
        >
          <PlaylistPlayIcon /> Sort
      </button>
      
      </div>

      <div id="chart" className={(window.innerWidth>480)?'row':'column'}>
        {
          bars
        }
      </div>
      <Legends algo={algo} />
      <p id="foot-note">Imagined by UnEmployed Alumni</p>
    </div>
  );
}

export default App;
