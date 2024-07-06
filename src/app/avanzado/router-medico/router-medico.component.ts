import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-router-medico',
  templateUrl: './router-medico.component.html',
  styleUrl: './router-medico.component.css',
})
export class RouterMedicoComponent {
  id: string;
  constructor(public router: Router, public activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  guardarMedico(){
    this.router.navigate(['medico','123'])
  }
}
