// Write a typescript program which contains one function named as Area.
// That function should calculate area of circle.
// Accept value of radius from user and return its area.
//Default value of PI should be 3.14 if it is not provided by caller
function Area(Rad, PI) {
    if (PI === void 0) { PI = 3.14; }
    var ans = 0;
    ans = PI * Rad * Rad;
    return ans;
}
var Ret = 0;
Ret = Area(5);
console.log(Ret);
Ret = Area(5, 7.28);
console.log(Ret);
