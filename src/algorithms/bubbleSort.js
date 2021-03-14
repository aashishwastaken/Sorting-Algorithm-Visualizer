function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


let bubbleSort = async (ar, len,speed, setAr, setSwapIndex, setCompIndex,setSortedIndex) => {
  //let [swapIndex, setSwapIndex] = useState([-1, -1]);
  
    let b = ar;

  //console.log('bubbleSort before', b);
  let delayForSwap = async (b, i, j) => {
    //console.log('swap', b[i], b[j]);

    setSwapIndex([i, j]);
    await sleep((speed));
    setAr([...b]);
    setSwapIndex([-1, -1]);
  }
  let delayForComparision = async (b, i, j) => {
    //console.log('swap', b[i], b[j]);

    setCompIndex([i, j]);
    await sleep((speed));
    setAr([...b]);
    setCompIndex([-1, -1]);
  }
 
    
   
  for (let i = 0; i < len - 1; i++) {

    for (let j = 0; j < len - i - 1; j++ ) {
      await delayForComparision(b, j, j + 1);
      if (b[j] > b[j + 1]) {
        // swap ar[j+1] and arr[j] 
        await delayForSwap(b, j, j + 1);
        let temp = b[j];

        b[j] = b[j + 1];
        b[j + 1] = temp;
      }
    }
    setSortedIndex(prevArray=>[...prevArray,len-i-1]);
  }
  setSortedIndex(prevArray=>[...prevArray,0]);

  //console.log('bubbleSort after', b);
  
};

export default bubbleSort;