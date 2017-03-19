// Readonly properties
// ---------------------
// Readonly property of the interface are initiated when the an object is first created. 
// You can't modify after creation. 
var newOffice = {
    streetNumber: 37,
    streetName: "Barrington Ave",
    city: "Toronto",
    state: "Ontario",
    postCode: "M4c4Y6",
    owner: "Jasmin Cao",
    tanent: "ABC Corp."
};
console.log(" * ------- Interface : Readonly properties ------- *");
console.log(newOffice);
console.log("Street Name:" + newOffice.streetName);
// update tanent
newOffice.tanent = 'Pijus SKR';
// update streetName
newOffice.streetName = 'Colman Ave';
