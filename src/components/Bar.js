import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';

export default function Bar({len,max,val,i,swapRef,compRef,sortedRef}) {
    let colorRef='#3cb1e0';
    let width=(window.innerWidth)/(2.4*len);
    let height=((3*window.innerHeight/5)/max)*val;

    if(swapRef.includes(i)){
        colorRef="red";
    }
    if(compRef.includes(i)){
        colorRef="yellow";
    }
    if(sortedRef.includes(i)){
        colorRef="#09f272";
    }


    if(window.innerWidth<480){
    height=(window.innerWidth)/(2.4*len);
    width=((3*window.innerHeight/5)/max)*val;
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
