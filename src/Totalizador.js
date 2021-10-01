
function impuestoPorEstado(estado){
    let impuestos = { CA: 0.0825, UT: 0.0665,NV:0.08, TX:0.0625, AL:0.04, "": 0 };
    return impuestos[estado];    
}

function descuentoPorPrecio(subTotal){
    if(subTotal >= 1000) return 0.03;
    return 0;
}

function calcularTotal(cantidad, precio, estado=""){
    let subTotal = precio * cantidad;
    let impuesto = impuestoPorEstado(estado);
    let subTotalConImpuesto = subTotal + subTotal * impuesto;
    let descuento = descuentoPorPrecio(subTotalConImpuesto);
    return subTotalConImpuesto - subTotalConImpuesto*descuento;
}

export default calcularTotal;