import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import InputSlider from './components/InputSlider';
import Bar from './components/Bar';
import './App.css';
import AlgosDropdown from './components/AlgosDropdown';
//import bubbleSort from './algorithms/bubbleSort';
// import bubbleSort from './algorithms/bubbleSort';


function App() {
  const [len, setLen] = useState(30);
  let [swapIndex,setSwapIndex]=useState([-1,-1]);
  let [ar, setAr] = useState([]);
  let [bars, setBars] = useState(<div></div>);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    setAr(Array.from({ length: len }, () => Math.floor(Math.random() * 100)));
    setSwapIndex([-1,-1]);
  }, [len]);

  useEffect(() => {
    setBars(ar.map((x, i) => {
      return <Bar i={i} val={x} max={100} len={len} refs={swapIndex} />
    }));
    //setSwapIndex([-1,-1]);
  }, [ar,len,swapIndex]);


  console.log('ar', ar);

  let bubbleSort = async (ar, len, setAr) => {
    let b = ar;

    console.log('bubbleSort before', b);
    let delay = async (b, i, j) => {
      console.log('swap', b[i], b[j]);
      let temp = b[j];

      b[j] = b[j + 1];
      b[j + 1] = temp;
      setSwapIndex([j,j+1]);
      await sleep((1));
      setAr([...b]);
    }

    for (let i = 0, k = 0; i < len - 1; i++, k++) {

      for (let j = 0; j < len - i - 1; j++, k++) {

        if (b[j] > b[j + 1]) {
          // swap ar[j+1] and arr[j] 
          await delay(b, i, j);
        }
      }
    }

    console.log('bubbleSort after', b);

  };

  return (
    <div className="App">
      <div className="row" style={{alignItems:'center'}}>
      <AlgosDropdown />
      <InputSlider setVal={(val) => setLen(val)} />
      
      <Button
        variant="contained"
        color="primary"
        className="btn"
        onClick={() => bubbleSort(ar, len, setAr)}
        startIcon={<PlaylistPlayIcon />}
      >
        Sort
      </Button>
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
