function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}





let mergeSort = async (ar, len, speed, setAr, setSwapIndex, setSelectedIndex, setCompIndex, setSortedIndex) => {
  //let [swapIndex, setSwapIndex] = useState([-1, -1]);

  let array1 = ar;

  let delayForMerge = async (b2,start,end,i,j) => {
    //console.log('swap', b[i], b[j]);

    setSwapIndex([b2.length+start]);
    await sleep(speed);
    //console.log('sorted==',[...array1.slice(0, i)], [...b1], [...array1.slice(j+1)]);
    setAr(prev =>[...prev.slice(0, start), ...b2, ...prev.slice(start+b2.length)]);

    await sleep(speed);
  //  setSortedIndex([start,end]);
    setSwapIndex([]);
  }

  //console.log('selectionSort before', b);
  let delayForJoin = async (b1, i, j) => {
    //console.log('swap', b[i], b[j]);

  //  setSwapIndex([i,j]);
    await sleep(speed);
    //console.log('sorted==',[...array1.slice(0, i)], [...b1], [...array1.slice(j+1)]);
    setAr(prev =>[...prev.slice(0, i), ...b1, ...array1.slice(j + 1)]);

    await sleep(speed);
    setSortedIndex([i, j+1]);
    //setSwapIndex([]);
  }
  let delayForBreak = async (b1, j, m) => {
    //console.log('swap', b[i], b[j]);

    setSelectedIndex([j, m]);
    // setCompIndex([j]);
    await sleep(speed);
    // setAr([...b1]);
    // setCompIndex([]);
  }

  async function merge(a, b, start, end) {
    let ans = [];
    let i = 0, j = 0;
    let aLen = a.length, bLen = b.length;
    while ((i < aLen) && (j < bLen)) {
      await delayForMerge(ans, start,end,i,j);
      if (a[i] <= b[j]) {
        ans.push(a[i]);
        i++;
      } else if (a[i] > b[j]) {
        ans.push(b[j]);
        j++;
      }
    }

    if (i < aLen) {
      ans.push(...a.slice(i));
    }

    if (j < bLen) {
      ans.push(...b.slice(j));
    }
    await delayForJoin(ans, start, end);
    console.log('just merged', ans);
    return ans;
  }


  async function mergeSort1(ar1, start, end) {
    let lenOfAr = ar1.length;
    let mid = lenOfAr / 2;

    await delayForBreak(array1, start, end);
    console.log('just broke', ar1);

    if (lenOfAr <= 1) {
      return await ar1;
    }


    let left = ar1.slice(0, mid);
    let right = ar1.slice(mid, lenOfAr);
    return await merge(await mergeSort1(left, start, start + mid - 1),
      await mergeSort1(right, start + mid, start + lenOfAr - 1),
      start, end);
  }



  let hoho = await mergeSort1(array1, 0, len);
  setSwapIndex([]);
  console.log('aaaaaa', await hoho);







  //  let min, k, temp;
  //      for (let i = 0; i < len; i++) {
  //          min = b[i];
  //          k = i;
  //          for (let j = i+1; j < len; j++) {

  //              await delayForComparision(b, j, k);
  //              if (b[j] < min) {
  //                  min = b[j];
  //                  k = j;
  //              }
  //          }
  //              await delayForSwap(b, i, k);
  //                  temp = b[i];
  //                  b[i] = min;
  //                  b[k] = temp;

  //          setSortedIndex(prevArray => [...prevArray, i]);
  //      }
  //      setSelectedIndex([]);
  //      setSortedIndex(prevArray => [...prevArray, len-1]);

  //console.log('selectionSort after', b);

};

export default mergeSort;