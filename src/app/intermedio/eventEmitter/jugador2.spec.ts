import { Jugador2 } from './jugador2';

describe('pruebas event emitter', () => {
  let jugador: Jugador2;

  beforeEach(() => (jugador = new Jugador2()));

  it('debe de emitir un evento cuando recibe daño', () => {
    let nuevoHp=0
    //aunque el subscribe es asíncrono la prueba espera hasta tener el resultado
    jugador.hpCambia.subscribe(hp => {
      nuevoHp = hp
    });

    jugador.recibeDanio(1000)

    expect(nuevoHp).toBe(0)
  })

  it('debe de emitir un evento cuando recibe daño y sobrevivir si es menos de 100', () => {
    let nuevoHp=0
    jugador.hpCambia.subscribe(hp => {
      nuevoHp = hp
    });

    jugador.recibeDanio(20)

    expect(nuevoHp).toBe(80)
  })
});
