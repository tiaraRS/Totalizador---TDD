function calcularTotal(cantidad, precio, estado=""){
    if (estado == "CA") return 10.825;
    return precio * cantidad;
}

export default calcularTotal;