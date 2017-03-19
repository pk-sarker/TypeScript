class Rectangles {

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

let obrect = new Rectangles(10, 8);


console.log("Area: "+obrect.getArea());
console.log("Circle Area: "+Rectangles.getCircleArea(5));