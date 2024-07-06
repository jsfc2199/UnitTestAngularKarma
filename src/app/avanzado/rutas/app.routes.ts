import { Routes } from '@angular/router';
import { HospitalComponent } from '../../hospital/hospital.component';
import { MedicoComponent } from '../../intermedio-integracion/medico/medico.component';
import { IncrementadorComponent } from '../../intermedio-integracion/incrementador/incrementador.component';

export const rutas: Routes = [
  { path: 'hospital', component: HospitalComponent },
  { path: 'medico/:id', component: MedicoComponent },
  { path: '**', component: IncrementadorComponent },
];
