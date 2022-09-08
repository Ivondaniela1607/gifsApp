import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifPagesComponent } from './gif-pages/gif-pages.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GifPagesComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifPagesComponent
  ]
})
export class GifsModule { }
