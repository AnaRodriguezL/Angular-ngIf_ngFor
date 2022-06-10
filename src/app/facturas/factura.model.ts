import { Item } from "./item.model";

export class Factura {
    constructor(
        public serial: number,
        public fecha: Date,
        public items: Item[]
    ) { }
}