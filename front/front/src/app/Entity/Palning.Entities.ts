import { Entraineur } from "./Entraineur.Entities";

export class Planing{  
    constructor(
        public id?:number,
        public nom?:string,
        public date?:Date,
        public debut?:string,
        public fin?:string,
        public entraineur?:Entraineur,
        
    ){}
}