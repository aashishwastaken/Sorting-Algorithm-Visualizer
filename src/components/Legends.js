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
            ['#ff00fa','Current subarray under sorting'],
            ['red','Current "pivot"'],
            ['yellow','Arranging elements to find new pivot position'],
            ['#09f272','Sorted elements which were a pivot at some time'],
            ['#3cb1e0','Sorted elements which were never a pivot at any time (after sorting)']
        ],
        mergeSort:[
            ['red','Comparing the 2 elements of 2 sorted sub-arrays and "merging" the smaller one to the final array'],
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
//console.log(algo);
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
