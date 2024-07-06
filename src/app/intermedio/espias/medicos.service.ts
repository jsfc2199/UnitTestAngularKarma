import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class MedicosService {
  constructor(public http: HttpClient) {}

  getMedicos() {
    //la idea es simular los spy para estas peticiones que no tienen un url válida
    return this.http.get('...').pipe(map((resp:any) => resp['medicos']));
  }

  agregarMedico(medico: any) {
    return this.http.post('...', medico).pipe(map((resp:any) => resp['medico']));
  }

  borrarMedico(id: string) {
    return this.http.delete('...').pipe(map((resp:any) => resp['medico']));
  }
}
