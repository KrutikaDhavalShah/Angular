// Write a typescript program which contains one function named as Maximum.
// That function accepts array of numbers and it should return largest number from array
function Maximum() {
    var Arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Arr[_i] = arguments[_i];
    }
    var Cnt = 0;
    var max = 0;
    for (Cnt = 0; Cnt < Arr.length; Cnt++) {
        max = Math.max.apply(Math, Arr);
    }
    return max;
}
var max = Maximum(23, 89, 4, 101, 5);
console.log(max);
var max = Maximum(23, 8, 6);
console.log(max);
var max = Maximum(23, 89, 6, 29, 56, 45, 77, 32);
console.log(max);
