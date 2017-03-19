/**
 * Created by pijus on 2016-09-23.
 */

class Rectangle {

    private area:number;
    constructor(protected width:number, protected height:number){
        this.calculateArea();
    }

    private calculateArea():void{
        this.area = this.width*this.height;
    }
    public getHeight(){

    }
    public getArea():number{
        return this.area;
    }

    public static getCircleArea(radius:number):number{
        return Math.PI*Math.pow(radius, 2);
    }
}
var obRect = new Rectangle(10, 8);
document.write("Area: "+obRect.getArea());
document.getElementById("output").innerHTML = obRect.getArea().toString();
document.write("<br />Circle Area: "+Rectangle.getCircleArea(5));



class MagicRectangle extends Rectangle{
    public getDetails():void{
        document.write("<br />Width: "+this.width);
        document.write("<br />height: "+this.height);
        document.write("<br />area:"+this.getArea());
    }
}

var obMRect = new MagicRectangle(6,11);
obMRect.getDetails();

class Shape{
    private shapeId:number;
    private shapeType:string;

    constructor(id:number, type:string){
        this.shapeId = id;
        this.shapeType = type;
    }

    protected getDetails():void{
        document.write("<br >Shape ID: "+this.shapeId);
        document.write("<br >Shape Type: "+this.shapeType);
    }

}

class Circle extends Shape{
    private area:number;
    private radius:number;

    constructor(id:number, type:string, radius:number){
        super(id, type);
        this.radius = radius;
        this.calculateArea();
    }

    private calculateArea():void{
        this.area = Math.PI*Math.pow(this.radius, 2);
    }
    public getDetails():void{
        super.getDetails();
        document.write("<br />Shape Area: "+this.area);
    }
}

var obCircle = new Circle(1, 'Circle', 5);
obCircle.getDetails();

class MyStack<T>{
    private index:number = 0;
    private vec:T[];

    constructor(size:number){
        this.vec = new Array<T>(size);
    }

    push(ob:T):void{
        this.vec[this.index] = ob;
        this.index++;
    }
    pop():T{
        this.index--;
        return this.vec[this.index];
    }
}

function createStack<T>(size:number):MyStack<T>{
    return new MyStack<T>(size);
}

var func:<T>(n:number)=>MyStack<T>;
func=createStack;

var stack1 = func<string>(10);
var stack2 = createStack<number>(5);
stack1.push("Pijus");
stack1.push("Kumar");
stack1.push("Sarker");
stack1.push("Mousumi");
stack1.push("Saha");

stack2.push(4);
stack2.push(2);
stack2.push(5);

document.write("<br />Stack2: "+stack2.pop());
document.write("<br />Stack1: "+stack1.pop());

class Student{
    private _average:number;
    private _id:number;
    private _name:string;

    constructor(id:number, name:string, average:number){
        this._average = average;
        this._id = id;
        this._name = name;
    }

    average():number{
        return this._average;
    }
}

function calculateAverage<T extends Student>(students:Array<T>):number{
    var sum:number = 0;
    for(var i:number = 0; i<students.length; i++){
        sum += students[i].average();
    }
    var result = sum/students.length;
    return result;
}
var students = [new Student(2689, "Pijus", 85), new Student(7692, "Sarker", 93), new Student(9190, "Mousumi", 83), new Student(1908, "Saha", 88)];

var average = calculateAverage(students);

document.write("<br />>> Average: "+average);

interface Iprint{
    printId():void;
    printCode():void;
    printName():void;
}

class Employee implements Iprint{
    private _code:number;
    private _id:number;
    private _name:string;

    constructor(code:number, id:number, name:string){
        this._code = code;
        this._id = id;
        this._name = name;
    }

    printId():void{
        document.write("<br />----------------------<br />Employee ID: "+this._id);
    }
    printCode():void{
        document.write("<br />Employee CODE: "+this._code);
    }
    printName():void{
        document.write("<br />Employee NAME: "+this._name);
    }
}

function printObject<T extends Employee>(employees:Array<T>):void{

    for(var i:number = 0; i<employees.length; i++){
        employees[i].printId();
        employees[i].printCode();
        employees[i].printName();
    }
}

var employeeList = [new Employee(2689, 1, "Pijus"), new Employee(7692, 3, "Sarker"), new Employee(9190, 5, "Mousumi"), new Employee(1908, 6, "Saha")];

printObject(employeeList);

// function signature
interface calculateFunction{
    (a:number, b:number):number;
}

function add(a, b){
    return (a+b);
}

function multiply(a, b){
    return (a*b);
}

var f:calculateFunction;

f=add;
document.write("<br />--------------------<br /> Add: "+f(2,7));
f=multiply;
document.write("<br />--------------------<br /> Multiply: "+f(3,6));


