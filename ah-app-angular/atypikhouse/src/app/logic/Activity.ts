export class Activity {
  
    constructor(public title: string = "",
                public desc: string = "", // description in db
                public location: string = "0.000000, 0.000000", // lat lng location
                public tags: string, // list of ID of tags
                public type: number // Id of type
                )
    {
    }
  
  }