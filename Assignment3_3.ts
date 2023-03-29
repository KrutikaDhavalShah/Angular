class Circle
{
   public Radius : number;
   public PI : number;
   public Ans : number;

   public constructor(Rad : number)
   {
      this.Radius = Rad;
      this.PI = 3.14;
   }

   public Area() : number
   {
      this.Ans = this.PI * this.Radius * this.Radius
      return this.Ans;
   }
   
}

class CircleX extends Circle
{
   public constructor(Rad : number)
   {
      super(Rad);
   }

   public Circumference() : number
   {
      this.Ans = 2 * this.PI * this.Radius
      return this.Ans;
   }
}

var obj1 = new CircleX(11);
var obj2 = new CircleX(21);

var Ret : number = 0;

Ret = obj1.Area();
console.log("Area of obj1 : " + Ret)    //Area of obj1 : 379.94 

Ret = obj1.Circumference();
console.log("Circumference of obj1 : " + Ret)    //Circumference of obj1 : 69.08 

Ret = obj2.Area();
console.log("Area of obj2 : " + Ret)    //Area of obj2 : 1384.74

Ret = obj2.Circumference();
console.log("Circumference of obj2 : " + Ret)    //Circumference of obj2 : 131.88


