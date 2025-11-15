export class Contact{
    constructor(
      public id?: number,
    public nom?: String,
    public email?: String,
    public  telephone?: String,
    public   message?: String,
    public   sujet?:String,
    public read: boolean = false,  // Add this property
    public createdAt?: Date 
      
    
    ) {



      if (typeof this.createdAt === 'string') {
        try {
          this.createdAt = new Date(this.createdAt);
        } catch (e) {
          this.createdAt = new Date(); // Fallback à la date actuelle
        }
      } else if (!this.createdAt) {
        this.createdAt = new Date(); // Valeur par défaut
      }
    }
  }
  