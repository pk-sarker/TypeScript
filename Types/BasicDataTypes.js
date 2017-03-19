console.log(" * * * * * * * * * *  Basic Data Types  * * * * * * * * * * ");
// Boolean
var isValid = false;
console.log(" *-- Boolean: isValid: " + isValid);
// Number
var amount = 10104;
console.log(" *-- Number: amount: $" + amount);
// String
var fullName = "Pijus Kumar Sarker";
console.log(" *-- String: name: " + fullName);
// Array
var marks = [90, 67, 79, 86];
var output = "";
marks.forEach(function (mark) {
    output += mark.toString() + ", ";
});
console.log(" *-- Array[Number]: Marks: " + output);
var names = ["Kumar", "Sarker", "Mousumi Saha", "Anik"];
output = "";
names.forEach(function (student) {
    output += student + ", ";
});
console.log(" *-- Array[String]: Names: " + output);
// Enum
var EmpType;
(function (EmpType) {
    EmpType[EmpType["New"] = 0] = "New";
    EmpType[EmpType["Contractor"] = 1] = "Contractor";
    EmpType[EmpType["FullTime"] = 2] = "FullTime";
    EmpType[EmpType["Parmanent"] = 4] = "Parmanent";
})(EmpType || (EmpType = {}));
;
var empA = EmpType.Contractor;
console.log(" *-- Enum: Employee Type: " + empA);
// Any
var notSure = 19;
console.log(" *-- Any[number]: x:" + notSure);
notSure = "Pijus";
console.log(" *-- Any[string]: x:" + notSure);
notSure = true;
console.log(" *-- Any[boolean]: x:" + notSure);
