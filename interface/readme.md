# Interface

## Feature List
- Optional Properties
- Readonly properties
- Function Types
- Indexable Types
- Class Types
- Extending Interfaces
- Hybrid Types
- Interfaces Extending Classes

###### Optional Properties
Usually all the properties of the interface are required. But in TypeScript _Interface_ can have optional properties also. To make a property optional a question mark symbol is added at the end of the variable name.
```
interface TableConfig {
    width?: number,
    height?: number,
    color: string,
    sizeName?: string
}
```
Here `color` is the required field and all others are optional field.
