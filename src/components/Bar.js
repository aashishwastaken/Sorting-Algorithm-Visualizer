import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';

export default function Bar({len,max,val,i,refs}) {
    let colorRef='#c700ff';
    if(i===refs[0] || i===refs[1]){
        colorRef="red";
    }
    return (
        <Tooltip title={val} >
            
        <div className="bar" id={i}  style={{
                                    backgroundColor:colorRef,
                                    width:(window.innerWidth)/(1.5*len),
                                    height:((3*window.innerHeight/4)/max)*val
                                    }}>
            {val}
        </div>
        </Tooltip>
    )
}
