// Write a typescript program which contains one function named as Maximum.
// That function accepts array of numbers and it should return second largest number from array
//Input:  23   89   6   29   56   45   77   32
//Output: Second Maximum number is 77
function Maximum() {
    var Arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Arr[_i] = arguments[_i];
    }
    var first = -1, second = -1;
    for (var Cnt = 0; Cnt < Arr.length; Cnt++) {
        if (Arr[Cnt] > first) {
            second = first;
            first = Arr[Cnt];
        }
        else if (Arr[Cnt] > second && Arr[Cnt] != first) {
            second = Arr[Cnt];
        }
    }
    console.log(second);
}
Maximum(23, 89, 6, 29, 56, 45, 77, 32);
