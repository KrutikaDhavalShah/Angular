// Write a typescript program which contains one function named as Maximum.
// That function accepts array of numbers and it should return largest number from array
 
//Input:  23   89   6   29   56   45   77   32
//Output: Maximum number is 89

function Maximum(...Arr : number[]) : number
{
    let Cnt : number = 0
    var max : number = 0
    for(Cnt = 0; Cnt < Arr.length; Cnt++)
    {
        max = Math.max(...Arr);
    }
    return max;
}

var Ret : number = 0;
var max : number = Maximum(23, 89,4,101,5)
console.log(max);      //101

var max : number = Maximum(23,8,6)
console.log(max);       //23

var max : number = Maximum(23, 89, 6,29,56,45,77,32)
console.log(max);       //89

