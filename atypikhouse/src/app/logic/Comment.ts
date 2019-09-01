export class Comment {
    id: number;
    constructor(public comment: string = "", 
                public rating: number, // score 1 to 5 stars
                public date: Date,
                public ID_user: number, // Id of user
                public ID_booking: number // Id of booking
                )
    {
    }
  
  }