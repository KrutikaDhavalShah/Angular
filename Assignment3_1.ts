class Arithematic
{
   public No1 : number;
   public No2 : number;

   public constructor(A : number, B : number)
   {
      this.No1 = A;
      this.No2 = B;
   }

   public Addition() : number
   {
      return this.No1 + this.No2;
   }

   public Subtraction() : number
   {
      return this.No1 - this.No2;
   }

   public Multiplication() : number
   {
      return this.No1 * this.No2;
   }

   public Division() : number
   {
      return this.No1  /  this.No2;
   }
}

var obj1 = new Arithematic(11,10);
var obj2 = new Arithematic(21,11);

var Ret : number = 0;

Ret = obj1.Addition();
console.log("Addition of obj1 : " + Ret)       

Ret = obj1.Subtraction();
console.log("Subtraction of obj1 : " + Ret)     

Ret = obj1.Multiplication();
console.log("Multiplication of obj1 : " + Ret)  

Ret = obj1.Division();
console.log("Division of obj1 : " + Ret)  

Ret = obj2.Addition();
console.log("Addition of obj2 : "+ Ret)         

Ret = obj2.Subtraction();
console.log("Subtraction of obj2 : "+ Ret)        

Ret = obj2.Multiplication();
console.log("Multiplication of obj2 : " + Ret)  

Ret = obj2.Division();
console.log("Division of obj2 : " + Ret)  