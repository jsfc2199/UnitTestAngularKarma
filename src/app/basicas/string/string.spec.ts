import { mensaje } from "./string"

describe('pruebas sobre string', () => {
  it('should return hola juan', () => {
    const res = mensaje('juan')
    expect(res).toBe('hola juan')
    expect(typeof res).toBe('string')

  })


  it('should contain hola', () => {
    const res = mensaje('juan')
    expect(res).toContain('hola')
  })
})


