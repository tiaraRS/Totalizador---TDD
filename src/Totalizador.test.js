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
    it("Calcular total con estado dado NV- deberia devolver 21.33 para cantidad 2 y precio 10", () => {
        expect(calcularTotal(2, 10, "NV")).toEqual(21.6);
    });
    it("Calcular total con estado dado TX- deberia devolver 21.25 para cantidad 2 y precio 10", () => {
        expect(calcularTotal(2, 10, "TX")).toEqual(21.25);
    });
    it("Calcular total con estado dado AL- deberia devolver 20.8 para cantidad 2 y precio 10", () => {
        expect(calcularTotal(2, 10, "AL")).toEqual(20.8);
    });
    it("Calcular total con un descuento- deberia devolver 1940 para cantidad 2 y precio 1000", () => {
        expect(calcularTotal(2, 1000)).toEqual(1940);
    });
    it("Calcular total con un descuento y estado- deberia devolver 2100.05 para cantidad 2 y precio 1000", () => {
        expect(calcularTotal(2, 1000, "CA")).toEqual(2100.05);
    });
    it("Calcular total con un descuento y estado- deberia devolver 3085.125 para cantidad 2 y precio 1500", () => {
        expect(calcularTotal(2, 1500, "CA")).toEqual(3085.125);
    });

});


