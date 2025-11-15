import { Client } from "./Client.Entities";
import { Planing } from "./Palning.Entities";

export class Reservations{  
    constructor(
        public id?:number,
        public  planning?:Planing,
        public client?:Client
    ){}
}