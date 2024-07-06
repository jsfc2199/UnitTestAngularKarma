import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from } from 'rxjs';

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
});
