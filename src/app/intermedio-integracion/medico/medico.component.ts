import { Component } from '@angular/core';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
})
export class MedicoComponent {
  saludarMedico(nombre: string){
    return `hola ${nombre}`
  }
}
