function calcularTotal(cantidad, precio, estado=""){
    if (estado == "CA") return precio * cantidad + precio * cantidad * 0.0825;
    return precio * cantidad;
}

export default calcularTotal;