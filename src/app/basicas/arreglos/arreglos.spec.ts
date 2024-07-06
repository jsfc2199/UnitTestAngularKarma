import { obtenerRobots } from "./arreglos"

xdescribe('pruebas en arreglos', () => {
  it('should return 2 robots', () => {
    const res = obtenerRobots()
    expect(res.length).toBe(2)

  })

  it('should return 2 robots de otra forma', () => {
    const res = obtenerRobots()
    expect(res.length).toBeGreaterThanOrEqual(2)
  })

  it('should contain megaman ', () => {
    const res = obtenerRobots()
    expect(res).toContain('megaman')
  })

})

