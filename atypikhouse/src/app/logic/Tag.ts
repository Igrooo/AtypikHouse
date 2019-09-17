export class Tag {
  id: number;
    constructor(
      public type: boolean, //0= Thématique 1= Service & Equipement
      public tag: string = ""
      )
    {
    }
    
  }