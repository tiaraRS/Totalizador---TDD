import calcularTotal from "./Totalizador.js";

describe("Calcular total", () => {
    it("deberia devolver total 5 para cantidad 1 y precio 5", () => {
      expect(calcularTotal(1, 5)).toEqual(5);
    });
});


