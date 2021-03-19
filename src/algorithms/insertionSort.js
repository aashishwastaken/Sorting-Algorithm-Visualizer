function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms+100));
  }


 let insertionSort = async (ar, len, speed,setAr,setSwapIndex,setSelectedIndex,setCompIndex,setSortedIndex) => {
   //let [swapIndex, setSwapIndex] = useState([-1, -1]);

   let b = ar;

   //console.log('selectionSort before', b);
   let delayForSwap = async (b1, i, j) => {
       //console.log('swap', b[i], b[j]);

       setSwapIndex([i, j]);
       await sleep(speed);
       setAr([...b1]);
       setSwapIndex([]);
   }
   let delayForComparision = async (b1, j, m) => {
       //console.log('swap', b[i], b[j]);
       setSelectedIndex([m]);
       setCompIndex([j]);
       await sleep(speed);
       setAr([...b1]);
       setCompIndex([]);
      // setSelectedIndex([]);
   }


  
  let curIndex, temp;
  setSortedIndex(prevArray => [...prevArray, 0]);
  for (let i = 1; i < b.length; i++) {
    curIndex = i;
    while (curIndex > 0) {
      await delayForComparision(b, curIndex - 1, curIndex);
      if (b[curIndex - 1] < b[curIndex]) {
        break;
      }else{
        temp = b[curIndex];
        await delayForSwap(b,curIndex - 1, curIndex);
        b[curIndex] = b[curIndex - 1];
        b[curIndex - 1] = temp;
        curIndex--;
      }
    }
    setSortedIndex(prevArray => [...prevArray, i]);
  }


   setSelectedIndex([]);
   setSortedIndex(prevArray => [...prevArray, len-1]);

   //console.log('selectionSort after', b);


  };

  export default insertionSort;