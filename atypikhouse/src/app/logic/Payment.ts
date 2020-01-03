export class Payment {
  ID: number;
    constructor(public status: number = 1, // 0 = cancel 1 = waiting 2 = validate 
                public amount: number = 0, 
                public date:   string = '',
                public ID_user:    number = 1, // Id of user
                public ID_booking: number = 0 // Id of booking
                )
    {
    }
  
  }