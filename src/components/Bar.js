import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';

export default function Bar({ len, algo, max, val, i, swapRef, selectedRef, compRef, sortedRef,quickedIndex }) {
    let colorRef = '#3cb1e0';
    let width = (window.innerWidth) / (2.4 * len);
    let height = ((3 * window.innerHeight / 5) / max) * val;



    if (algo === 'quickSort') {
        if (i >= selectedRef[0] && i < selectedRef[1]) {
            colorRef = "#ff00fa";
        }
        

        if (i >= sortedRef[0] && i < sortedRef[1]) {
            colorRef = "#09f272";
        }

        if (quickedIndex.includes(i)) {
            colorRef = "#09f272";
        }
       
       
    }else if (algo === 'mergeSort') {
        if (i >= selectedRef[0] && i < selectedRef[1]) {
            colorRef = "yellow";
        }
        
        if (i >= sortedRef[0] && i < sortedRef[1]) {
            colorRef = "#09f272";
        }
       
    } else {
        if (sortedRef.includes(i)) {
            colorRef = "#09f272";
        }

        if (selectedRef.includes(i)) {
            colorRef = "#ff00fa";
        }
    }

    if (compRef.includes(i)) {
        colorRef = "yellow";
    }
    
    if (swapRef.includes(i)) {
            colorRef = "red";
        }
        
    if (window.innerWidth < 500) {
        height = (window.innerHeight) / (2.4 * len);
        width = ((3 * window.innerWidth / 5) / max) * val;
    }
    return (
        <Tooltip key={i} title={val} >

            <li className="bar" key={i} style={{
                border: '1px solid black',
                backgroundColor: colorRef,
                width,
                height
            }}>
                {val}
            </li>
        </Tooltip>
    )
}
