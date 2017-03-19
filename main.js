/**
 * Created by pijus on 2016-09-23.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rectangle = (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.calculateArea();
    }
    Rectangle.prototype.calculateArea = function () {
        this.area = this.width * this.height;
    };
    Rectangle.prototype.getHeight = function () {
    };
    Rectangle.prototype.getArea = function () {
        return this.area;
    };
    Rectangle.getCircleArea = function (radius) {
        return Math.PI * Math.pow(radius, 2);
    };
    return Rectangle;
}());
var obRect = new Rectangle(10, 8);
document.write("Area: " + obRect.getArea());
document.getElementById("output").innerHTML = obRect.getArea().toString();
document.write("<br />Circle Area: " + Rectangle.getCircleArea(5));
var MagicRectangle = (function (_super) {
    __extends(MagicRectangle, _super);
    function MagicRectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MagicRectangle.prototype.getDetails = function () {
        document.write("<br />Width: " + this.width);
        document.write("<br />height: " + this.height);
        document.write("<br />area:" + this.getArea());
    };
    return MagicRectangle;
}(Rectangle));
var obMRect = new MagicRectangle(6, 11);
obMRect.getDetails();
var Shape = (function () {
    function Shape(id, type) {
        this.shapeId = id;
        this.shapeType = type;
    }
    Shape.prototype.getDetails = function () {
        document.write("<br >Shape ID: " + this.shapeId);
        document.write("<br >Shape Type: " + this.shapeType);
    };
    return Shape;
}());
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(id, type, radius) {
        var _this = _super.call(this, id, type) || this;
        _this.radius = radius;
        _this.calculateArea();
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        this.area = Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.getDetails = function () {
        _super.prototype.getDetails.call(this);
        document.write("<br />Shape Area: " + this.area);
    };
    return Circle;
}(Shape));
var obCircle = new Circle(1, 'Circle', 5);
obCircle.getDetails();
var MyStack = (function () {
    function MyStack(size) {
        this.index = 0;
        this.vec = new Array(size);
    }
    MyStack.prototype.push = function (ob) {
        this.vec[this.index] = ob;
        this.index++;
    };
    MyStack.prototype.pop = function () {
        this.index--;
        return this.vec[this.index];
    };
    return MyStack;
}());
function createStack(size) {
    return new MyStack(size);
}
var func;
func = createStack;
var stack1 = func(10);
var stack2 = createStack(5);
stack1.push("Pijus");
stack1.push("Kumar");
stack1.push("Sarker");
stack1.push("Mousumi");
stack1.push("Saha");
stack2.push(4);
stack2.push(2);
stack2.push(5);
document.write("<br />Stack2: " + stack2.pop());
document.write("<br />Stack1: " + stack1.pop());
var Student = (function () {
    function Student(id, name, average) {
        this._average = average;
        this._id = id;
        this._name = name;
    }
    Student.prototype.average = function () {
        return this._average;
    };
    return Student;
}());
function calculateAverage(students) {
    var sum = 0;
    for (var i = 0; i < students.length; i++) {
        sum += students[i].average();
    }
    var result = sum / students.length;
    return result;
}
var students = [new Student(2689, "Pijus", 85), new Student(7692, "Sarker", 93), new Student(9190, "Mousumi", 83), new Student(1908, "Saha", 88)];
var average = calculateAverage(students);
document.write("<br />>> Average: " + average);
var Employee = (function () {
    function Employee(code, id, name) {
        this._code = code;
        this._id = id;
        this._name = name;
    }
    Employee.prototype.printId = function () {
        document.write("<br />----------------------<br />Employee ID: " + this._id);
    };
    Employee.prototype.printCode = function () {
        document.write("<br />Employee CODE: " + this._code);
    };
    Employee.prototype.printName = function () {
        document.write("<br />Employee NAME: " + this._name);
    };
    return Employee;
}());
function printObject(employees) {
    for (var i = 0; i < employees.length; i++) {
        employees[i].printId();
        employees[i].printCode();
        employees[i].printName();
    }
}
var employeeList = [new Employee(2689, 1, "Pijus"), new Employee(7692, 3, "Sarker"), new Employee(9190, 5, "Mousumi"), new Employee(1908, 6, "Saha")];
printObject(employeeList);
function add(a, b) {
    return (a + b);
}
function multiply(a, b) {
    return (a * b);
}
var f;
f = add;
document.write("<br />--------------------<br /> Add: " + f(2, 7));
f = multiply;
document.write("<br />--------------------<br /> Multiply: " + f(3, 6));
