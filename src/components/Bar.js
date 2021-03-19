import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';

export default function Bar({len,max,val,i,swapRef,selectedRef,compRef,sortedRef}) {
    let colorRef='#3cb1e0';
    let width=(window.innerWidth)/(2.4*len);
    let height=((3*window.innerHeight/5)/max)*val;

    if(sortedRef.includes(i)){
        colorRef="#09f272";
    }
    
    if(swapRef.includes(i)){
        colorRef="red";
    }
    if(compRef.includes(i)){
        colorRef="yellow";
    }
    
    if(selectedRef.includes(i)){
        colorRef="#ff00fa";
    }
    

    if(window.innerWidth<500){
    height=(window.innerHeight)/(2.4*len);
    width=((3*window.innerWidth/5)/max)*val;
    }
    return (
        <Tooltip key={i} title={val} >
            
        <li className="bar" key={i}  style={{
                                    border:'1px solid black',
                                    backgroundColor:colorRef,
                                    width,
                                    height
                                    }}>
            {val}
        </li>
        </Tooltip>
    )
}
