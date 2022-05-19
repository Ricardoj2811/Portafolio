let productoAMostrarDelStorage = JSON.parse(localStorage.getItem("productoAMostrar"));
document.getElementById("imgProducto").innerHTML = `<img src="../assets/${productoAMostrarDelStorage.imagen}.jpg" class="mx-auto d-block w-100" alt="${productoAMostrarDelStorage.titulo}">`;
document.getElementById("imgProducto2").innerHTML = `<img src="../assets/${productoAMostrarDelStorage.imagen2}.jpg" class="mx-auto d-block w-100" alt="${productoAMostrarDelStorage.titulo}">`;
document.getElementById("imgProducto3").innerHTML = `<img src="../assets/${productoAMostrarDelStorage.imagen3}.jpg" class="mx-auto d-block w-100" alt="${productoAMostrarDelStorage.titulo}">`;
document.getElementById("imgProducto4").innerHTML = `<img src="../assets/${productoAMostrarDelStorage.imagen4}.jpg" class="mx-auto d-block w-100" alt="${productoAMostrarDelStorage.titulo}">`;
document.getElementById("imgProducto5").innerHTML = `<img src="../assets/${productoAMostrarDelStorage.imagen5}.jpg" class="mx-auto d-block w-100" alt="${productoAMostrarDelStorage.titulo}">`;
document.getElementById("imgProducto6").innerHTML = `<img src="../assets/${productoAMostrarDelStorage.imagen6}.jpg" class="mx-auto d-block w-100" alt="${productoAMostrarDelStorage.titulo}">`;
document.getElementById("precioProducto").innerHTML = `Precio: ${productoAMostrarDelStorage.precio} $USD`;
document.getElementById("nombreProducto").innerHTML = productoAMostrarDelStorage.titulo;
document.getElementById("inputCantidad").innerHTML = `<input class="my-2" value="1" min="1" id="cantidad-${productoAMostrarDelStorage.id}" type="number" placeholder="cantidad">`
document.getElementById("botonAgregarAlCarrito").innerHTML = `<button type="button" onclick="agregarAlCarrito('${productoAMostrarDelStorage.titulo}')" class="btn btn-dark boton-compra-producto">
AGREGAR AL CARRITO 
</button>`;
document.getElementById("codigo").innerHTML = productoAMostrarDelStorage.codigo;
document.getElementById("caracteristicas").innerHTML = productoAMostrarDelStorage.caracteristicas;
document.getElementById("funciones").innerHTML = productoAMostrarDelStorage.funciones;
document.getElementById("contenido").innerHTML = productoAMostrarDelStorage.contenido;