// Write a typescript program which contains one function named as Fibonacci.
// That function accepts one njumber from user and print Fibonacci series till that number
 

function Fibonacci (No : number) : void
{
    let fibonacci: number[] = [0, 1];
    var Cnt : number = 0;
    for(Cnt = 2; Cnt <= No; Cnt++)
    {
        fibonacci[Cnt] = fibonacci[Cnt - 2] + fibonacci[Cnt - 1];
        if(fibonacci[Cnt] == No)
    {
        break;
    }
    }
    console.log(fibonacci);
}
Fibonacci(21);

/*
let fibonacci: number[] = [0, 1];

function Fibonacci(num: number)
 {
  for (let i: number = 2; i < num; i++)
  {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    if(fibonacci[i] == num)
    {
        break;
    }
  }
  return fibonacci;
}
console.log(Fibonacci(21));
*/
