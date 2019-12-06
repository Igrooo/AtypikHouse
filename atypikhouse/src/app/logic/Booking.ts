export class Booking {
    ID: number;
    constructor(public status:    number = 1,  // 0 = canceled, 1= waiting 2 = validate
                public nbPersons: number = 1,
                public date:      string = '', // this.datePipe.transform(new Date(),"yyyy-MM-dd");
                public dateStart: string = '',
                public dateEnd:   string = '',
                public ID_user:   number = 1,  // Id of user
                public ID_house:  number = 1   // Id of house
                )
    {
    }
  
  }