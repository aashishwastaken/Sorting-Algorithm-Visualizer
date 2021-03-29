function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}





let heapSort = async (array1, len, speed, setAr, setSwapIndex, setSelectedIndex, setCompIndex, setSortedIndex) => {
  //let [swapIndex, setSwapIndex] = useState([-1, -1]);

  let ar1 = array1;

  let delayForSwap = async (b2,i,j) => {
    //console.log('swap', b[i], b[j]);

    setSwapIndex([i,j]);
    await sleep(speed);
    //console.log('sorted==',[...array1.slice(0, i)], [...b1], [...array1.slice(j+1)]);
    setAr([...b2]);

   // await sleep(speed);
  //  setSortedIndex([start,end]);
    setSwapIndex([]);
  }

  //console.log('selectionSort before', b);
  let delayForComparision = async (b1, i) => {
    //console.log('swap', b[i], b[j]);

    setCompIndex([i]);
    await sleep(speed);
    //console.log('sorted==',[...array1.slice(0, i)], [...b1], [...array1.slice(j+1)]);
    setAr([...b1]);

   // await sleep(speed);
   // setSortedIndex([i, j+1]);
    setCompIndex([]);
  }
  let delayForHeapify = async (b1, j) => {
    //console.log('swap', b[i], b[j]);

    setSelectedIndex([j]);
    // setCompIndex([j]);
    await sleep(speed);
    setAr([...b1]);
    setSelectedIndex([]);
  }

  let heapify = async (ar, n, i) => {
  await delayForHeapify(ar,i);
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    
    if (left < n && ar[left] > ar[largest]) {
      await delayForComparision(ar,left);
      largest = left;
    }
  
    if (right < n && ar[right] > ar[largest]) {
      await delayForComparision(ar,right);
      largest = right;
    }
  
    if (largest !== i) {
     
     await swap(ar, largest, i);
     await heapify(ar, n, largest);
    }
  }
  
  let swap = async (ar, i, j) => {
    await delayForSwap(ar,i,j);
    let temp = ar[i];
    ar[i] = ar[j];
    ar[j] = temp;
  }
  
let heapSort1=async (ar)=>{
    let n = ar.length;
    for (let i = n / 2 - 1; i >= 0; i--) {
      await heapify(ar, n, i);
    }
  
    for (let j = n - 1; j >= 0; j--) {
     await swap(ar, 0, j);
     await heapify(ar, j, 0);
     setSortedIndex(prev=>[...prev,j]);
    }
  
  }
  
 await heapSort1(ar1);
  console.log(ar1);

};

export default heapSort;