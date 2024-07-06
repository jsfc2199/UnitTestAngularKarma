import { Component, inject } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
})
export class MedicoComponent {

  medicoService = inject(MedicoService)
  medicos: any[] = []

  saludarMedico(nombre: string){
    return `hola ${nombre}`
  }

  obtenerMedicos(){
    this.medicoService.getMedicos().subscribe(
      (medicos:any[]) => this.medicos = medicos
    )
  }
}
