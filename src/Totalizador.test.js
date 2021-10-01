import calcularTotal from "./Totalizador.js";

describe("Calcular total", () => {
    it("deberia devolver total 5 para cantidad 1 y precio 5", () => {
      expect(calcularTotal(1, 5)).toEqual(5);
    });
    it("deberia devolver 10 para cantidad 2 y precio 5", () => {
        expect(calcularTotal(2, 5)).toEqual(10);
    });
    it("Calcular total con estado predeterminado CA - deberia devolver 10.825 para cantidad 2 y precio 5", () => {
        expect(calcularTotal(2, 5, "CA")).toEqual(10.825);
    });
    it("Calcular total con estado predeterminado CA - deberia devolver 21.65 para cantidad 2 y precio 10", () => {
        expect(calcularTotal(2, 10, "CA")).toEqual(21.65);
    });
    it("Calcular total con estado dado UT- deberia devolver 21.33 para cantidad 2 y precio 10", () => {
        expect(calcularTotal(2, 10, "UT")).toEqual(21.33);
    });

    

});


