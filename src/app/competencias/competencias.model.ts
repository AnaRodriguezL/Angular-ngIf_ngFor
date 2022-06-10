import { Comportamiento } from "./comportamientos.model";

export class Competencias {
    constructor(
        public id: number,
        public nombre: string,
        public descripcion: string,
        public comportamientos: Comportamiento[]
    ) { }
}