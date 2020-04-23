Math.floor(amount / temp);
Math.random(); //always returns a number lower than 1.
Math.floor(Math.random() * 10); // returns a random integer from 0 to 9
Math.round(4.7); // returns 5
Math.round(4.4); // returns 4
Math.pow(8, 2); // returns 64
function power(x,y){
     if(y===0){return 1}
     else if (y%2 ===0){
         return power(x,parseInt(y/2))*power(x,parseInt(y/2))
     }else{
          return x*power(x,parseInt(y/2))*power(x,parseInt(y/2))
     }

}

Math.sqrt(64); // returns 8
Math.abs(-4.7); // returns 4.7
Math.ceil(4.4); // returns 5, rounded up
Math.floor(4.7); // returns 4, rounded down
Math.max(...array); 
Math.max()==-Infinity;//max compares values with something which is -Infinity
let m = Number.MAX_VALUE;
m = Number.MAX_SAFE_INTEGER;
m = Number.MIN_VALUE;
m = Number.MIN_SAFE_INTEGER;
m == Number.POSITIVE_INFINITY;
m == Number.NEGATIVE_INFINITY;
