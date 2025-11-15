import { Categorie } from './categorie.Entities'
import { Salle } from './Salle.Entities'

export class Pack {
    constructor(  
        public id?: number,
        public nom?: string,
        public prix?: string,
        public image?: string,
        public description?: string,
        public categorie?:Categorie, 
        public salleDeSport?:Salle,
    ) {}
}
