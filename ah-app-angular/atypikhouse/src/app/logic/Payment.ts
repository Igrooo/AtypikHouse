export class Payment {
  
    constructor(public amount: number, 
                public date: Date,
                public status: boolean,
                public user: number, // Id of user
                public booking: number // Id of booking
                )
    {
    }
  
  }