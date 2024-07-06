import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedio/espias/medicos.component';
import { MedicoComponent } from './intermedio-integracion/medico/medico.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { IncrementadorComponent } from './intermedio-integracion/incrementador/incrementador.component';
import { HospitalComponent } from './hospital/hospital.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    IncrementadorComponent,
    HospitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule { }
