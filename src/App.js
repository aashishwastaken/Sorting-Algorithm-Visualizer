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
import heapSort from './algorithms/heapSort';

function App() {
  let [len, setLen] = useState(30);
  let [speed, setSpeed] = useState(50);
  let [swapIndex, setSwapIndex] = useState([]);
  let [selectedIndex, setSelectedIndex] = useState([]);
  let [quickedIndex, setQuickedIndex] = useState([]);
  let [compIndex, setCompIndex] = useState([]);
  let [sortedIndex, setSortedIndex] = useState([]);
  let [ar, setAr] = useState([]);
  let [bars, setBars] = useState(<div></div>);
  let [arraySlider, setArraySlider] = useState(null);
  let [speedSlider, setSpeedSlider] = useState(null);
  let [algo, setAlgo] = useState('quickSort');
  let [sorting, setSorting] = useState(false);

  let onSort = async () => {

    setSorting(true);
    if (algo === 'bubbleSort')
      await bubbleSort(ar, len, speed, setAr, setSwapIndex, setCompIndex, setSortedIndex);
    else if (algo === 'selectionSort')
     await selectionSort(ar, len, speed, setAr, setSwapIndex, setSelectedIndex, setCompIndex, setSortedIndex);
    else if (algo === 'quickSort') 
      await quickSort(ar, len, speed, setAr, setSwapIndex, setSelectedIndex, setCompIndex, setSortedIndex, setQuickedIndex);
    else if (algo === 'mergeSort')
     await mergeSort(ar, len, speed, setAr, setSwapIndex, setSelectedIndex, setCompIndex, setSortedIndex);
    else if (algo === 'insertionSort')
     await  insertionSort(ar, len, speed, setAr, setSwapIndex, setSelectedIndex, setCompIndex, setSortedIndex);
    else if (algo === 'heapSort')
      await  heapSort(ar, len, speed, setAr, setSwapIndex, setSelectedIndex, setCompIndex, setSortedIndex);
    setSorting(false);
  }

  useEffect(() => {
    setArraySlider(<ArraySizeSlider value={len} sorting={sorting} setValue={(val) => setLen(val)} />)
  }, [len, sorting]);
  useEffect(() => {
    setSpeedSlider(<SpeedSlider setVal={(val) => setSpeed(val)} />)
  }, [speed]);

  useEffect(() => {
    setAr(Array.from({ length: len }, () => Math.floor(1 + Math.random() * 100)));
    setSwapIndex([]);
    setCompIndex([]);
    setSortedIndex([]);
    setSelectedIndex([]);
    setQuickedIndex([]);
  }, [len, algo]);

  useEffect(() => {
    setBars(<div></div>);
    setBars(ar.map((x, i) => {
      return <Bar key={`bar-${i}`}
        i={i}
        val={x}
        max={100}
        len={len}
        algo={algo}
        swapRef={swapIndex}
        selectedRef={selectedIndex}
        compRef={compIndex}
        sortedRef={sortedIndex}
        quickedIndex={quickedIndex} />
    }));
    //setSwapIndex([-1,-1]);
  }, [algo, swapIndex, quickedIndex, selectedIndex, compIndex, sortedIndex]);




  // console.log('ar', ar);


  return (
    <div className="App">
      <Header />
      <div className="row secondary-header" >
        <AlgosDropdown algo={algo} sorting={sorting} setAlgo={setAlgo} />
        {
          arraySlider
        }
        {
          speedSlider
        }

        <button
          className="btn"
          onClick={async () => await onSort()}
        >
          <PlaylistPlayIcon /> Sort
      </button>

      </div>

      <div id="chart" className={(window.innerWidth > 480) ? 'row' : 'column'}>
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
