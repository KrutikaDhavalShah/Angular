// Write a typescript program which contains one function named as DisplayFactors.
// That function should accept one number and display factors of that number.
function DisplayFactors(No) {
    var Cnt = 0;
    for (Cnt = 1; Cnt <= No / 2; Cnt++) {
        if ((No % Cnt) == 0) {
            console.log(Cnt);
        }
    }
}
DisplayFactors(20);
