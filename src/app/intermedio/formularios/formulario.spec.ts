import { FormBuilder } from '@angular/forms';
import { FormularioRegister } from './formulario';

describe('pruebas sobre formularios', () => {
  let component: FormularioRegister;
  beforeEach(() => {
    component = new FormularioRegister(new FormBuilder());
  });

  it('debe de CREAR UN FORMULARIO CON 2 CAMPOS', () => {
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });

  it('el email debe de ser obligatorio', () => {
    const control = component.form.get('email');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('el email debe de ser un correo valido', () => {
    const control = component.form.get('email');
    control?.setValue('valido@gmail.com');
    expect(control?.valid).toBeTruthy();
  });
});
