import { Jugador } from "./clase"

describe('pruebas de clases', () => {
  const jugador = new Jugador()
  beforeAll(() => {

  })
  beforeEach(() => {
    jugador.hp = 100
  })
  afterAll(() => {

  })
  afterEach(() => {
    jugador.hp = 100
  })

  it('should return 0 de hp', () => {

    const res = jugador.recibeDanio(200);
    expect(res).toBe(0)
  })

  it('should return 80 de hp', () => {
    const res = jugador.recibeDanio(20);
    expect(res).toBe(80)
  })
})
