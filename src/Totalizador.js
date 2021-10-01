function calcularTotal(cantidad, precio, estado=""){
    let subTotal = precio * cantidad;
    let impuestoCA = 0.0825;
    if (estado == "CA") return subTotal + subTotal * impuestoCA;
    if (estado == "UT") return subTotal + subTotal * 0.0665;
    return subTotal;
}

export default calcularTotal;