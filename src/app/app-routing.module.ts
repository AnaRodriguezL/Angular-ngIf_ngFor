import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FacturaComponent } from 'src/app/facturas/factura.component';
import { CompetenciasComponent } from 'src/app/competencias/competencias.component';

const routes: Routes = [
  { path: '', component: FacturaComponent },
  { path: 'competencias', component: CompetenciasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
