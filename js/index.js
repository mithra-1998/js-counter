let currResult = 0;
let result = document.getElementById('get-number');

const decr = document.getElementById('decr');
const incr = document.getElementById('incr');

document.getElementById('get-number').value = currResult;
incr.addEventListener('click',function(){   
    if(currResult < 10) { 
        currResult = currResult + 1; 
        document.getElementById('get-number').value = currResult;  
                        }                    //One way of getting the output
});

decr.addEventListener('click',function(){   
    if(currResult > 0) {                                           
    currResult = currResult - 1;
    document.getElementById('get-number').value = currResult;       
    }               //One way of getting the output
});
