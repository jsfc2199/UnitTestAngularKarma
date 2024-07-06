import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { EMPTY, from, of, throwError } from 'rxjs';

describe('MedicosComponent', () => {
  let componente: MedicosComponent;

  //instancia del servicio, y enviamos null porque no nos interesa usar nada del http
  const servicio = new MedicosService(null);

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });

  it('init debe de cargar los médicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];

    //usamos espías para hacer peticiones falsas
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return from([medicos]);
    });

    //el ngOnInit lo debemos llamar de manera manual a menos de que estuviera en e constructor del componente
    componente.ngOnInit();

    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  it('debe de llamar al servidor para agregar un médico', () => {

    //usamos espías para hacer peticiones falsas
    const espia = spyOn(servicio, 'agregarMedico').and.callFake((medico) => EMPTY);

    //el ngOnInit lo debemos llamar de manera manual a menos de que estuviera en e constructor del componente
    componente.agregarMedico();

    expect(espia).toHaveBeenCalled();
  });

  it('debe agregar al medico', () => {
    const medicoResponse = 'Carlo'

    //usamos espías para hacer peticiones falsas
    spyOn(servicio, 'agregarMedico').and.returnValue(of(medicoResponse))

    //el ngOnInit lo debemos llamar de manera manual a menos de que estuviera en e constructor del componente
    componente.agregarMedico();

    expect(componente.medicos.indexOf(medicoResponse)).toBeGreaterThanOrEqual(0)
  });

  it('si falla la adición el mensajeError = error del servicio', () => {
    const error = 'Error del medico'

    //usamos espías para hacer peticiones falsas
    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(() => error))

    //el ngOnInit lo debemos llamar de manera manual a menos de que estuviera en e constructor del componente
    componente.agregarMedico();

    expect(componente.mensajeError).toBe(error);
  });
});
