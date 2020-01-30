export class User {
  ID: number;
    constructor(public type:      number = 1, // 0=admin 1=user
                public email:     string = '', 
                public password:  string = '', 
                public checkPassword:  string = '', //for update & signup
                public name:      string = '', 
                public firstname: string = '', 
                public address:   string = '',
                public zipcode:   number = null,
                public city:      string = '',
                public siret:     number = null
                )
    {

    }
  
  }
  