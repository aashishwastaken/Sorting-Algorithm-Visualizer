function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


 let insertionSort = async (ar, len, setAr,setSwapIndex,setCompIndex) => {
    //let [swapIndex, setSwapIndex] = useState([-1, -1]);
    let b = ar;

    //console.log('insertionSort before', b);
    let delay = async (b, i, j) => {
      //console.log('swap', b[i], b[j]);
      let temp = b[j];

      b[j] = b[j + 1];
      b[j + 1] = temp;
      setSwapIndex([j, j + 1]);
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

    //console.log('insertionSort after', b);

  };

  export default insertionSort;