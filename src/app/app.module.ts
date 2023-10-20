import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

import { AppComponent } from './app.component';
import { IngresoInformacionComponent } from './ingreso-informacion/ingreso-informacion.component';
import { ResumenComponent } from './resumen/resumen.component';


const appRoutes: Routes = [
  { path: 'ingreso', component: IngresoInformacionComponent },
  { path: 'resumen', component: ResumenComponent },
  { path: '', redirectTo: '/ingreso', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    IngresoInformacionComponent,
    ResumenComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule, // Agrega HttpClientModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
