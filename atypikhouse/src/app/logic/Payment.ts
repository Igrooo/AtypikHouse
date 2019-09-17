export class Payment {
  id: number;
    constructor(public status: number, // 0 = cancel 1 = waiting 2 = validate 
                public amount: number, 
                public date: Date,
                public ID_user: number, // Id of user
                public ID_booking: number // Id of booking
                )
    {
    }
  
  }