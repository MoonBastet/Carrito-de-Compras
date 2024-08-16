let listaDeProductos = [
    { producto: "Leche", precio: 1000},
    { producto: "Pan de Molde", precio: 2000},
    { producto: "Queso", precio: 1200},
    { producto: "Mermelada", precio: 890},
    { producto: "Azúcar", precio: 1300}
];

let carritoDeCompras = []

//funcion para agregar productos al carrito
function agregarProducto(producto, cantidad, precio) {
    carritoDeCompras.push({producto: producto, cantidad: cantidad, precio: precio});
}


//funcion para calcular total de la compra
function calcularTotal() {
    let total = 0; // Inicializa el total en 0
    for (let i = 0; i < carritoDeCompras.length; i++) {
        // Accede al precio del producto actual en el carrito
        total += carritoDeCompras[i].precio * carritoDeCompras[i].cantidad; 
    }
    return total; // Devuelve el total calculado
}
console.log(calcularTotal())

//funcion que muestre detalle de la compra}
function mostrarDetalle() {
    if (carritoDeCompras.length === 0) {
        console.log("El carrito de compras está vacío.")
    } else {
        let detalle = "";
        console.log("Carrito de compras: ");
        carritoDeCompras.forEach((item) => {
            detalle += `${item.cantidad} ${item.producto}(s)......${item.precio * item.cantidad}\n`
      })
      alert(`${detalle}`)
    }
  }
//si no tiene return la función, podemos llamarla sin el console.log
mostrarDetalle()

//funcion para finalizar la compra
function finalizarCompra() {
    if (listaDeProductos.length === 0) {
        console.log("El carrito de compras está vacío.")
    } else {
        console.log("¿Seguro que deseas finalizar la compra?");
        // Agregar confirmación aquí
        listaDeProductos = [];
        console.log("Carrito de compras finalizado.");
      }
    }



function iniciarGestionDeCompras() {
    let seguirFuncionando = true;
    let opcionProducto;
    while (seguirFuncionando) {
        alert("Productos disponibles:\n1.- Leche $1000\n2.- Pan de Molde $2000\n3.- Queso $1200\n4.- Mermelada $890\n5.- Azúcar $1300");
        let productoIncorrecto = true;
        while (productoIncorrecto) {
            opcionProducto = prompt("Ingresa el número del producto que deseas agregar al carrito");    
            if (opcionProducto > 0 && opcionProducto < 6) {productoIncorrecto = false}
            else {
                alert("Por favor ingrese un producto disponible.")
                opcionProducto = prompt("Ingresa el número del producto que deseas agregar al carrito");
            }
        }
        let cantidadProducto = prompt("Ingresa la cantidad de unidades que deseas del producto:");
        agregarProducto(listaDeProductos[opcionProducto-1].producto,cantidadProducto, listaDeProductos[opcionProducto-1].precio);
        alert(`${cantidadProducto} ${listaDeProductos[opcionProducto -1].producto}(s) agregado(s) al carrito.`);
        let seguirAgregando = prompt("¿Deseas seguir agregando productos? (s/n)").toLowerCase();
        if (seguirAgregando == "n") {
            seguirFuncionando = false;
        }
        else {
            seguirFuncionando = true;
        }


    }
    alert(calcularTotal());
    mostrarDetalle();
    alert("Gracias por su compra!")
}
    
 
iniciarGestionDeCompras()