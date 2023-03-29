var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(Rad) {
        return _super.call(this, Rad) || this;
    }
    CircleX.prototype.Circumference = function () {
        this.Ans = 2 * this.PI * this.Radius;
        return this.Ans;
    };
    return CircleX;
}(Circle));
var obj1 = new CircleX(11);
var obj2 = new CircleX(21);
var Ret = 0;
Ret = obj1.Area();
console.log("Area of obj1 : " + Ret); //Area of obj1 : 379.94 
Ret = obj1.Circumference();
console.log("Circumference of obj1 : " + Ret); //Area of obj1 : 379.94 
Ret = obj2.Area();
console.log("Area of obj2 : " + Ret); //Area of obj2 : 1384.74
Ret = obj2.Circumference();
console.log("Circumference of obj2 : " + Ret); //Area of obj1 : 379.94 
