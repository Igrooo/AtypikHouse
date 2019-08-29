export class Payment {
  
    constructor(public status: boolean, // 0 = cancel 1 = waiting 2 = validate 
                public amount: number, 
                public date: Date,
                public user: number, // Id of user
                public booking: number // Id of booking
                )
    {
    }
  
  }