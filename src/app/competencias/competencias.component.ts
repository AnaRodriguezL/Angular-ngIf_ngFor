import { Component } from '@angular/core';

import { Comportamiento } from './comportamientos.model';
import { Competencias } from './competencias.model';

@Component({
    selector: 'app-competencias',
    templateUrl: './competencias.component.html',
    styleUrls: ['./competencias.component.css']
})
export class CompetenciasComponent {

    // COMPETENCIAS
    id: number;
    serial: number;
    nombre: string;
    descripcion: string;
    competencia: Competencias[] = [];
    competenciaPanel: boolean = true;

    // COMPORTAMIENTOS
    descripcionC: string;
    porcentaje: number;
    comportamientoPanel: boolean = true;

    constructor() {
        this.serial = 23400;
        this.id = 0;
        this.nombre = "";
        this.descripcion = "";

        this.descripcionC = "";
        this.porcentaje = 0;
    }

    agregarCompetencias() {
        this.competenciaPanel = false;
    }

    registrarCompetencia() {
        try {
            let competenciaAux = new Competencias(this.serial + 1, this.nombre, this.descripcion, []);
            this.competencia.push(competenciaAux);

            this.nombre = "";
            this.descripcion = "";

            this.competenciaPanel = true;
        } catch (e) {
            console.log("An error ocurred on add Factura =>", e)
        }
    }

    agregarComportamientos(serial: number) {
        this.id = serial;
        this.comportamientoPanel = false;
    }

    registrarComportamiento(id: number) {
        try {
            let comportamiento = new Comportamiento(id, this.descripcionC, this.porcentaje);
            this.competencia[id].comportamientos.push(comportamiento);

            this.descripcionC = "";
            this.porcentaje = 0;

            this.comportamientoPanel = true;
        } catch (e) {
            console.log("An error ocurred con register articule =>", e);
        }
    }

    eliminarComportamiento(id: number) {
        try {
            this.competencia[id].comportamientos.pop();
        } catch (e) {
            console.log("An error ocurred con register articule =>", e);
        }
    }
}
