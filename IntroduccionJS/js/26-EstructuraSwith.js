const metodoPago = "Cheque"

switch(metodoPago){
    case "Tarjeta": 
        console.log("Pagaste con tarjeta")
        break;
    case "Bitcoin": 
        console.log("Pagaste con Bitcoin")
        break;
    case "Cheque": 
        console.log("El usuario va a pagar con chequem, revisaremos los fondos primero")
        break;
    case "Efectivo":
        console.log("Pagaste con efectivo")
        break;
    default:    
        console.log("Aun no has pagado")
        break;
}

