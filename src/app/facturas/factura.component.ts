import { Component } from '@angular/core';

import { Item } from './item.model';
import { Factura } from './factura.model';

@Component({
    selector: 'app-factura',
    templateUrl: './factura.component.html',
    styleUrls: ['./factura.component.css']
})
export class FacturaComponent {

    // FACTURA
    facturaId: number;
    serial: number;
    total: number;
    facturas: Factura[] = [];

    // ITEMS
    nombre: string;
    precio: number;
    articulos: boolean = true;

    constructor() {
        this.total = 0;
        this.facturaId = 0;
        this.serial = 23400;

        this.nombre = "";
        this.precio = 0;
    }

    agregarFactura() {
        try {
            let factura = new Factura(this.serial + 1, new Date(), []);
            this.facturas.push(factura);
        } catch (e) {
            console.log("An error ocurred on add Factura =>", e)
        }
    }

    agregarArticulo(serial: number) {
        this.facturaId = serial;
        this.articulos = false;
    }

    registrarArticulo(id: number) {
        try {
            this.total += this.precio;
            let item = new Item(id, this.nombre, this.precio, this.total);
            this.facturas[id].items.push(item);

            this.nombre = "";
            this.precio = 0;

            this.articulos = true;
        } catch (e) {
            console.log("An error ocurred con register articule =>", e);
        }
    }
}
