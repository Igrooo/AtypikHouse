export class Comment {
  
    constructor(public comment: string = "", 
                public rating: number,
                public date: Date,
                public user: number, // Id of user
                public booking: number // Id of booking
                )
    {
    }
  
  }