import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Falsy, from, Observable, Subject } from 'rxjs';

class FakeRouter {
  navigate(params){}
}

class FakeActivatedRoute{
  params: Observable<any> = from([{id:'nuevo'}])
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers:[
        {provide: Router, useClass: FakeRouter},
        {provide: ActivatedRoute, useClass: FakeActivatedRoute, useValue:{
          params: from([{id: 'nuevo'}])
        }},

      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redicreccionar a medico cuando se guarde',()=>{
    const router = TestBed.inject(Router)
    const spy = spyOn(router, 'navigate')

    component.guardarMedico()

    expect(spy).toHaveBeenCalledWith(['medico', '123'])
  })


  it('Debe de colocar le id = nuevo',()=>{
    TestBed.inject(ActivatedRoute)
        expect(component.id).toBe('nuevo')
  })

});
