export class Booking {
    id: number;
    constructor(public status: number = 1, // 0 = canceled, 1= waiting 2 = validate
                public nbPersons: number = 1,
                public date: Date,
                public dateStart: Date,
                public dateEnd: Date,
                public ID_user: number = 0, // Id of user
                public ID_house: number = 0 // Id of house
                )
    {
    }
  
  }