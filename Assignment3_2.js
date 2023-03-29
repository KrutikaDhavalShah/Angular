var Circle = /** @class */ (function () {
    function Circle(Rad) {
        this.Radius = Rad;
        this.PI = 3.14;
    }
    Circle.prototype.Area = function () {
        this.Ans = this.PI * this.Radius * this.Radius;
        return this.Ans;
    };
    return Circle;
}());
var obj1 = new Circle(11);
var obj2 = new Circle(21);
var Ret = 0;
Ret = obj1.Area();
console.log("Area of obj1 : " + Ret);
Ret = obj2.Area();
console.log("Area of obj2 : " + Ret);
