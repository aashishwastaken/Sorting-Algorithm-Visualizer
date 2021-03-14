function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


let selectionSort = async (ar, len, speed, setAr, setSwapIndex,setSelectedIndex, setCompIndex, setSortedIndex) => {
    //let [swapIndex, setSwapIndex] = useState([-1, -1]);

    let b = ar;

    //console.log('selectionSort before', b);
    let delayForSwap = async (b1, i, j) => {
        //console.log('swap', b[i], b[j]);

        setSwapIndex([i, j]);
        await sleep((speed));
        setAr([...b1]);
        setSwapIndex([-1, -1]);
    }
    let delayForComparision = async (b1, j, m) => {
        //console.log('swap', b[i], b[j]);
        setSelectedIndex([m]);
        setCompIndex([j]);
        await sleep((speed));
        setAr([...b1]);
        setCompIndex([-1, -1]);
    }


let min, k, temp;
    for (let i = 0; i < len; i++) {
        min = b[i];
        k = i;
        for (let j = i+1; j < len; j++) {

            await delayForComparision(b, j, k);
            if (b[j] < min) {
                min = b[j];
                k = j;
            }
        }
            await delayForSwap(b, i, k);
                temp = b[i];
                b[i] = min;
                b[k] = temp;

        setSortedIndex(prevArray => [...prevArray, i]);
    }
    setSelectedIndex([]);
    setSortedIndex(prevArray => [...prevArray, len-1]);

    //console.log('selectionSort after', b);

};

export default selectionSort;