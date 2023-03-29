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

var obj1 = new Circle(11);
var obj2 = new Circle(21);

var Ret : number = 0;

Ret = obj1.Area();
console.log("Area of obj1 : " + Ret)    //Area of obj1 : 379.94 

Ret = obj2.Area();
console.log("Area of obj2 : " + Ret)    //Area of obj2 : 1384.74

