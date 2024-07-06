import { MedicoComponent } from '../../intermedio-integracion/medico/medico.component';
import { rutas } from './app.routes';

describe('rutas ppales', () => {
  it('debe existir la ruta medico/id', () => {
    expect(rutas).toContain({
      path: 'medico/:id',
      component: MedicoComponent,
    });
  });
});
