export default function bubbleSort( ar,n) 
    { 
        console.log('bubbleSort before',ar);   
        let temp;
        
        for (let i = 0; i < n-1; i++) 
            for (let j = 0; j < n-i-1; j++) 
                if (ar[j] > ar[j+1]) 
                { 
                    // swap ar[j+1] and arr[j] 
                    temp = ar[j]; 
                    ar[j] = ar[j+1]; 
                    ar[j+1] = temp; 
                } 


       console.log('bubbleSort after',ar);         
    } 