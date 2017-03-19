function createTable(config) {
    var newTable = { color: "black", sizeName: "white", area: 100 };
    if (config.color) {
        newTable.color = config.color;
    }
    if (config.height && config.width) {
        newTable.area = config.height * config.width;
    }
    if (config.sizeName) {
        newTable.sizeName = config.sizeName;
    }
    else {
        newTable.sizeName = "Reqular";
    }
    return newTable;
}
var newTable = createTable({ color: "Red", height: 120, width: 90 });
console.log(" * ------- Interface : Table ------- *");
console.log(newTable);
// Function Types
console.log(" * ------- Interface : Function Types ------- *");
var emp1Salary;
emp1Salary = function (hourlyRates, workingHourPerWeek, taxDeductionRate) {
    return (hourlyRates * workingHourPerWeek) - (hourlyRates * workingHourPerWeek) * (taxDeductionRate / 100);
};
console.log("Net Salary: " + emp1Salary(33, 37.5, 13));
