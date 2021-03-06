import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';

export default function Bar({len,max,val,i,refs}) {
    let colorRef='#3cb1e0';
    if(i===refs[0] || i===refs[1]){
        colorRef="#3ce052";
    }
    return (
        <Tooltip title={val} >
            
        <div className="bar" key={i}  style={{
                                    border:'1px solid black',
                                    backgroundColor:colorRef,
                                    width:(window.innerWidth)/(1.5*len),
                                    height:((3*window.innerHeight/4)/max)*val
                                    }}>
            {val}
        </div>
        </Tooltip>
    )
}
