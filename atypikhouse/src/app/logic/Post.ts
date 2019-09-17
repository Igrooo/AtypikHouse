export class Post {
  id: number;
    constructor(public date: Date,
                public message: string = "", 
                public house: number, // Id of House
                public userFrom: number, // Id of User 
                public userTo: number // Id of User
                )
    {
    }
  
  }