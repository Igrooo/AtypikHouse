export class User {
  id: number;
    constructor(public type: boolean, // 0=admin 1=user
                public email: string = "", 
                public password: string = "", 
                public name: string = "", 
                public firstname: string = "", 
                public address: string = "",
                public zipcode: number,
                public city: string = ""
                )
    {

    }
  
  }
  