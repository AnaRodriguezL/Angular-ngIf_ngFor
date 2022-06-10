import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngb-modal';

import { AppComponent } from './app.component';
import { FacturaComponent } from './facturas/factura.component';
import { CompetenciasComponent } from './competencias/competencias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';

// MODULOS PARA EL SIDENAV
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

// RUTAS
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [
		AppComponent,
		FacturaComponent,
		CompetenciasComponent,
		SidenavComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		BrowserAnimationsModule,
		MatSidenavModule,
		MatListModule,
		MatToolbarModule,
		MatIconModule,
		ModalModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	],
})
export class AppModule { }
