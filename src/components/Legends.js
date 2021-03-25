import React from 'react'

import '../App.css';

export default function Legends({algo}) {

    let legendsData={
        bubbleSort:[
            ['red','Swap'],
            ['yellow','Comparision (inside "bubble")'],
            ['#09f272','Sorted']
        ],
        selectionSort:[
            ['red','Swap'],
            ['yellow','Hunting the min value'],
            ['#ff00fa','Current "selected" min value'],
            ['#09f272','Sorted']
        ],
        quickSort:[
            ['red','Swap'],
            ['yellow','Comparision'],
            ['#09f272','Sorted']
        ],
        mergeSort:[
        ['red','Comparing the 2 elements of 2 sorted sub-arrays and merging the smaller one to the final array'],
            ['yellow','The sub-array to be broken in half'],
            ['#09f272','Sorted']
        ],
        insertionSort:[
            ['red','Swap'],
            ['yellow','Comparision'],
            ['#ff00fa','Element about to be "inserted"'],
            ['#09f272','Sorted']
        ]

    }
console.log(algo);
    return (
        <div id='legend'><span style={{fontWeight:600}}>Legends</span>
            {legendsData[algo].map((x,i)=>{
                
                return ( <div className="row" style={{justifyContent:'flex-start'}}>
                    <div className="legendColor" style={{backgroundColor:x[0]}} ></div>
                    <div className="legendTitle" >{x[1]}</div>
                    
                </div>);
})}
        </div>
    )
}
