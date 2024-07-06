import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private http = inject(HttpClient)

  getMedicos(){
    return this.http.get('...')
  }
}
