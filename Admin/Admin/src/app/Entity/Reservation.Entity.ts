import { Client } from "./Client.Entities";
import { Pack } from "./Pack.Entities";

export class Reservation {

    constructor(
        public id?: number,
        public client?: Client,
        public pack?: Pack,
      ) {}


}