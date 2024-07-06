import { incrementar } from "./numeros"


describe('pruebas sobre numeros', () => {
  it('should incrementar en 1', () => {
    const res = incrementar(5)
    expect(res).toBe(6)

  })


  it('should return 100 si el numero es mayor a 100', () => {
    const res = incrementar(105)
    expect(res).toBe(100)
  })
})

