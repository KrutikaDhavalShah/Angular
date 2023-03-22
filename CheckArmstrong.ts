// Write a typescript program which contains one arrow function named as ChkArmstrong.
// That function accept one number and check whether number is Armstrong number or not.
 
//Input:  153
//Output: It is Armstrong number

var num : number = 153;
var digits = (num, count = 0) => {
   if(num){
      return digits(Math.floor(num / 10), ++count);
   };
   return count;
};
console.log(digits(num));
console.log(digits(123456));
console.log(digits(53453));
console.log(digits(5334534534));


