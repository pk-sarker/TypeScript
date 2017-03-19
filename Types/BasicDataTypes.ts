console.log(" * * * * * * * * * *  Basic Data Types  * * * * * * * * * * ");

// Boolean
let isValid: boolean = false;
console.log(" *-- Boolean: isValid: "+isValid);

// Number
let amount: Number = 10104;
console.log(" *-- Number: amount: $"+amount);

// String
let fullName: String = "Pijus Kumar Sarker";
console.log(" *-- String: name: "+fullName);

// Array
let marks: number[] = [90, 67, 79, 86];
let output: string = "";
marks.forEach(mark => {
    output += mark.toString()+", ";
});
console.log(" *-- Array[Number]: Marks: "+output);

let names: string[] = ["Kumar", "Sarker", "Mousumi Saha", "Anik"];
output = "";
names.forEach(student => {
    output += student+", ";
});
console.log(" *-- Array[String]: Names: "+output);

// Enum
enum EmpType {New = 0, Contractor = 1, FullTime = 2, Parmanent = 4};
let empA: EmpType = EmpType.Contractor;
console.log(" *-- Enum: Employee Type: "+empA);

// Any
let notSure: any = 19;
console.log(" *-- Any[number]: x:"+notSure);
notSure = "Pijus";
console.log(" *-- Any[string]: x:"+notSure);
notSure = true;
console.log(" *-- Any[boolean]: x:"+notSure);


