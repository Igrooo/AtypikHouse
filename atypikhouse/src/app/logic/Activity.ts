export class Activity {
    ID: number;
    constructor(public title:       string = '',
                public description: string = '', 
                public locationLat: number = 0,
                public locationLng: number = 0,
                public listID_tags: string = '', // list of ID tags
                public ID_type:     number = 0   // ID of type
                )
    {
    }
  }