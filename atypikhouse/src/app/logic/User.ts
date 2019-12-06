export class User {
  ID: number;
    constructor(public type:      boolean = true, // 0=admin 1=user
                public email:     string = '', 
                public password:  string = '', 
                public name:      string = '', 
                public firstname: string = '', 
                public address:   string = '',
                public zipcode:   number = 0,
                public city:      string = ''
                )
    {

    }
  
  }
  