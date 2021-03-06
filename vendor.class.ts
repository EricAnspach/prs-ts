export class Vendor {
    id: number;
    code: string;
    name: string;
    address: string;    
    city: string;
    state: string;
    zip: string;
    phoneNumber: string;
    email: string;
    isPreapproved: boolean;

    constructor(id: number, code: string, name: string, address: string, city: string, state: string, zip: string,
         phoneNumber: string, email: string, isPreapproved: boolean) {
             this.id = id;
             this.code = code;
             this.name = name;
             this.address = address;
             this.city = city;
             this.state = state;
             this.zip = zip;
             this.phoneNumber = phoneNumber;
             this.email = email;
             this.isPreapproved = isPreapproved;
         }
}