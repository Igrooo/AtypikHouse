export class Tag {
  ID: number;
    constructor(
      public type: number = 0, //0= Thématique 1= Service & Equipement
      public tag:  string = ''
      )
    {
    }
    
  }