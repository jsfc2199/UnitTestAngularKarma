import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ElementRef } from '@angular/core';

describe('Incremendator Component', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule],
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
  });

  it('Debe de mostrar la leyenda', () => {
    component.leyenda = 'progreso de carga';
    const elem: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;

    //esperamos a que se detecten los cambios primero
    fixture.detectChanges();
    expect(elem.innerHTML).toContain('progreso');
  });

  it('debe de mostrar en el input el valor del progreso', () => {
    component.cambiarValor(5);
    fixture.detectChanges();

    //como a veces la detección de cambios es "lenta" podemos esperar a que esté estable
    //ademas se evaluaba primero el expect antes de que la detecc9ón de cambios se ejecutara
    fixture.whenStable().then(() => {
      const compiled: HTMLElement = fixture.nativeElement;
      const input: HTMLInputElement = compiled.querySelector('input');
      expect(input.value).toBe('55');
    });
  });

  it('debe de incrementar/decrementar en 5 con un click en el botón', () => {
    const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'));
    buttons[0].triggerEventHandler('click', null)
    expect(component.progreso).toBe(45)
    buttons[1].triggerEventHandler('click', null)
    expect(component.progreso).toBe(50)
  });
});
