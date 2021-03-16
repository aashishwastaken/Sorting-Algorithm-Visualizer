import React from 'react'

import '../App.css';

export default function Legends({algo}) {

    let legendsData={
        bubbleSort:[
            ['red','Swap'],
            ['yellow','Comparision'],
            ['#09f272','Sorted']
        ],
        selectionSort:[
            ['red','Swap'],
            ['yellow','Hunting the min value'],
            ['#09f272','Sorted'],
            ['#ff00fa','Current min value']
        ],
        quickSort:[
            ['red','Swap'],
            ['yellow','Comparision'],
            ['#09f272','Sorted']
        ],
        mergeSort:[
            ['red','Swap'],
            ['yellow','Comparision'],
            ['#09f272','Sorted']
        ],
        insertionSort:[
            ['red','Swap'],
            ['yellow','Comparision'],
            ['#09f272','Sorted']
        ]

    }
console.log(algo);
    return (
        <div id='legend'>Legends
            {legendsData[algo].map((x,i)=>{
                
                return ( <div className="row" style={{justifyContent:'flex-start'}}>
                    <div className="legendColor" style={{backgroundColor:x[0]}} ></div>
                    <div className="legendTitle" >{x[1]}</div>
                    
                </div>);
})}
        </div>
    )
}
