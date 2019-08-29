export class Comment {
  
    constructor(public comment: string = "", 
                public rating: number, // score 1 to 5 stars
                public date: Date,
                public user: number, // Id of user
                public booking: number // Id of booking
                )
    {
    }
  
  }