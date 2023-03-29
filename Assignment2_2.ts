// Write a typescript program which contains one function named as Summation.
// That function accepts array of numbers and returns the summation of each number from array.
 
//Input:  23   6   7   4   5   7   
//Output: Addition is 52

function Summation(...Arr : number[]) : number
{
    let Cnt : number = 0
    var Sum: number = 0
    for(Cnt = 0; Cnt < Arr.length; Cnt++)
    {
        Sum = Sum + Arr[Cnt]
    }
    return Sum;
}

var Ret : number = 0;
var add : number = Summation(23,6,7,4,5,7)
console.log(add);      //52


