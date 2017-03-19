var Rectangles = (function () {
    function Rectangles(width, height) {
        this.width = width;
        this.height = height;
        this.calculateArea();
    }
    Rectangles.prototype.calculateArea = function () {
        this.area = this.width * this.height;
    };
    Rectangles.prototype.getHeight = function () {
    };
    Rectangles.prototype.getArea = function () {
        return this.area;
    };
    Rectangles.getCircleArea = function (radius) {
        return Math.PI * Math.pow(radius, 2);
    };
    return Rectangles;
}());
var obrect = new Rectangles(10, 8);
console.log("Area: " + obrect.getArea());
console.log("Circle Area: " + Rectangles.getCircleArea(5));
