export interface ResponseAPIVehicles {
    _id:          string;
    model:        string;
    color:        string;
    km:           number;
    value:        string;
    registerDate: Date;
    img?:          string;
    popular:      boolean;
    cilindraje?:   null | string;
    vehicleNew:   boolean;
    sold:         boolean;
    typeVehicle:  TypeVehicle;
    createdAt:    Date;
    updatedAt:    Date;
    calification: Number;
}

export enum TypeVehicle {
    Car = "car",
    Motorcicle = "motorcicle",
}
