// Readonly properties
// ---------------------
// Readonly property of the interface are initiated when the an object is first created. 
// You can't modify after creation. 

interface Address {
    readonly streetNumber: number,
    readonly streetName: string,
    readonly city: string,
    readonly state: string,
    readonly postCode: string,
    owner: string,
    tanent: string
}

let newOffice: Address = {
    streetNumber: 37,
    streetName: "Barrington Ave",
    city: "Toronto",
    state: "Ontario",
    postCode: "M4c4Y6",
    owner: "Jasmin Cao",
    tanent: "ABC Corp.",
};

console.log(" * ------- Interface : Readonly properties ------- *");
console.log(newOffice);
console.log("Street Name:"+newOffice.streetName);

// update tanent
newOffice.tanent = 'Pijus SKR';

// update streetName
// newOffice.streetName = 'Colman Ave';  // an error will occure during compilation process as streetName is read only.


