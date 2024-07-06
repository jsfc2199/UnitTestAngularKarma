import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { rutas } from './avanzado/rutas/app.routes';

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
