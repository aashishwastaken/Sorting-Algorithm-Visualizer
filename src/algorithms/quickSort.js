function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let quickSort = async (ar, len, speed, setAr, setSwapIndex, setSelectedIndex, setCompIndex, setSortedIndex,setQuickedIndex) => {
  //let [swapIndex, setSwapIndex] = useState([-1, -1]);

  let array = ar;

  let delayForScanningPossiblePivot = async (b1, k,m) => {
    //console.log('swap', b[i], b[j]);

    setCompIndex([k,m]);
    await sleep(speed);
    //console.log('sorted==',[...array1.slice(0, i)], [...b1], [...array1.slice(j+1)]);
    setAr([...b1]);

    await sleep(speed);
   // setSortedIndex([i, j + 1]);
    setCompIndex([]);
  }

  let delayForPivot = async (b1, p,q) => {
    //console.log('swap', b[i], b[j]);

      setSwapIndex([p,q]);
    await sleep(speed);
    //console.log('sorted==',[...array1.slice(0, i)], [...b1], [...array1.slice(j+1)]);
    setAr([...b1]);

    await sleep(speed);
   // setSortedIndex([i, j + 1]);
    //setSwapIndex([]);
  }

  let delayForBreak = async (b1, j, m) => {
    //console.log('swap', b[i], b[j]);

    setSelectedIndex([j, m]);
    // setCompIndex([j]);
    await sleep(speed);
     setAr([...b1]);
    // setCompIndex([]);
  }



 async function quickSort1(array, left, right) {
   await delayForBreak(array,left,right);
    //console.log('started');
    if (left < right) {
      let pivot = right;
      await delayForPivot(array,pivot);
      
      let i = left - 1, temp,j;
      //console.log('pivot,i', pivot, i);

      ///////////looking for new pivot position
      for ( j = left; j < right; j++) {
        await delayForScanningPossiblePivot(array,i,j);
        if (array[j] < array[pivot]) {
          i++;
          temp = array[j];
          array[j] = array[i];
          array[i] = temp;
        }
      }
      ///////////looking for new pivot position

      
      //console.log('pivot,j==', pivot, j,i+1);
      ////////////swapping pivot to the right place
      temp = array[pivot];
      array[pivot] = array[i + 1];
      array[i + 1] = temp;
      pivot = i + 1;

      await delayForPivot(array,pivot);
      ////////////swapping pivot to the right place
      //console.log('array',array);

      setQuickedIndex(prev=>[...prev,pivot]);

     await quickSort1(array, left, pivot - 1);
     await quickSort1(array, pivot + 1, right);

    }
  }




  await quickSort1(array, 0, len-1);
  setSwapIndex([]);
  //console.log('aaaaaa', await hoho);






};

export default quickSort;