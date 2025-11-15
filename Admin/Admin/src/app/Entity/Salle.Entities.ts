export class Salle{
    [x: string]: any;
    constructor(
      public id?: number,
      
      public nom?: string,
      public adress?: string,
      public email?: string,

      public telephone?: string, 
      public mp?: string,
     
   
      public etat?: boolean 
    ) {}
  }
  