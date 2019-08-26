export class Booking {
  
    constructor(public nbPersons: number = 1,
                public date: Date,
                public dateStart: Date,
                public dateEnd: Date,
                public status: boolean,
                public user: number, // Id of user
                public house: number // Id of house
                )
    {
    }
  
  }