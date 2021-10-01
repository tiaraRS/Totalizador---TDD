
function impuestoPorEstado(estado){
    let impuestos = { CA: 0.0825, UT: 0.0665,NV:0.08, TX:0.0625, AL:0.04, "": 0 };
    return impuestos[estado];    
}


function calcularTotal(cantidad, precio, estado=""){
    let subTotal = precio * cantidad;
    let impuesto = impuestoPorEstado(estado);
    if(subTotal >= 1000) return subTotal + subTotal * impuesto - ((subTotal +subTotal*impuesto)*0.03);
    return subTotal + subTotal * impuesto;
}

export default calcularTotal;