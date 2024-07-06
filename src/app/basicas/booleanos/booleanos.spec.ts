import { usuarioIngresado } from "./booleanos"

describe('pruebas en booleanos', () => {
  it('should return true', () => {
    const res = usuarioIngresado()
    expect(res).toBeTruthy()

  })

})

