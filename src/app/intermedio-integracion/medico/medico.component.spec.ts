import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoComponent } from './medico.component';

describe('MedicoComponent', () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicoComponent]
    })
    .compileComponents();

    //siempre retorna un fixture cuando se crea el componente
    fixture = TestBed.createComponent(MedicoComponent);

    //tenemos la instancia del componente y tener acceso a propiedades, html y métodos
    component = fixture.componentInstance;

    //nos sirve para estar primero pendientes de la detección de cambios , es decir si hay en el template partes con {{}}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return hola', () => {
    const name = 'juan'
    expect(component.saludarMedico(name)).toContain('hola');
  });
});
