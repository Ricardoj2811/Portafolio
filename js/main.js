const informacion = []
let nombreProducto;
let total = 0;

// const obtenerDatos = async (idDelHTML, archivoJSON, array) => {
//     const response = await fetch(`./js/${archivoJSON}.JSON`)
//     const data = await response.json();
//     data.forEach((producto) => {
//         array.push(producto)
//     })
//     crearCards(data, idDelHTML);
//     localStorage.setItem("Productos", JSON.stringify(data));
//     return data
// }

// obtenerDatos("listadoDeProductos", "informacion", informacion);

// console.log(productos)

// const carritoDeCompras = JSON.parse(localStorage.getItem("carritoDeCompras")) || [];
// numerosDelCarrito();

// let productosEnStorage = JSON.parse(localStorage.getItem("Productos"));

// function AgregarCards(cards, id) {
//     document.getElementById(id).innerHTML = cards;
// }

// function crearCards(productosParaLaVenta, idDelHTML) {
//     let listadoDeCards = ``;
//     productosParaLaVenta.forEach((elemento) => {
//         listadoDeCards += `
//         <div class="col-xl-2 col-md-4 col-sm-6 text-center border border-3 rounded-3 m-1">
//             <img src="./assets/${elemento.imagen}.jpg" class="img-fluid imagenes-shop mb-0 rounded-3" alt="${elemento.titulo}">
//             <p id="titulo-${elemento.id}" class="font-weight-bold letras-precio-shop my-0">${elemento.titulo}</p>
//             <p id="precio-${elemento.id}" class="font-weight-bold letras-precio-shop mt-0 mb-1">${elemento.precio} $USD</p>
//             <input class="my-2" value="1" min="1" id="cantidad-${elemento.id}" type="number" placeholder="cantidad">
//             <div class="align-items-center mb-2">
//                 <button type="button" onclick="agregarAlCarrito('${elemento.titulo}')" class="btn btn-dark boton-compra-shop">
//                 AGREGAR AL CARRITO 
//                 </button>
//                 <button type="button" onclick="verMas('${elemento.id}')" class="btn btn-success boton-compra-shop">
//                     Ver Más
//                 </button>
//             </div>
//         </div>`
//     })
//     AgregarCards(listadoDeCards, idDelHTML);
// }

// function buscarProducto() {
//     const nombreProductoBuscado = document.getElementById("productoBuscado").value.toUpperCase().trim();

//     const productosEncontrados = productos.filter((producto) => {
//         return producto.titulo.toUpperCase().match(nombreProductoBuscado);
//     });

//     const productosEncontrados2 = productos.filter((producto) => {
//         return producto.tipo.toUpperCase().match(nombreProductoBuscado);
//     });

//     if (productosEncontrados.length === 0) {
//         AgregarCards("<h1>Tu busqueda no arrojo ningun resultado :(</h1>")
//         if (productosEncontrados2.length === 0) {
//             AgregarCards("<h1>Tu busqueda no arrojo ningun resultado :(</h1>")
//         } else {
//             crearCards(productosEncontrados2);
//         }
//     } else {
//         crearCards(productosEncontrados);
//     }
// }

// function verMas(id) {
//     let productoAMostrar = productosEnStorage[id - 1];
//     localStorage.setItem("productoAMostrar", JSON.stringify(productoAMostrar));
//     // let productoAMostrarDelStorage = JSON.parse(localStorage.getItem("productoAMostrar"))
//     location.href = "./productoDetalle.html";
// }

// function obtenerValorInput(elemento) {
//     let valorInput = document.getElementById(elemento).value;
//     return valorInput
// }

// function cargarCantidadAlCarrito(elemento) {
//     document.getElementById("cantidadCarrito").innerHTML = elemento;
// }

// function agregarAlCarrito(nombreProducto) {
//     let producto = productos.find((producto) => producto.titulo === nombreProducto);
//     let valor = 0;
//     valor = Number(obtenerValorInput(`cantidad-${producto.id}`));
//     let elemento = carritoDeCompras.some((elemento) => elemento.titulo === nombreProducto);
//     if (producto.stock > 0 && !elemento) {
//         carritoDeCompras.push(producto)
//         producto.stock = producto.stock - 1
//         producto.cantidad += valor
//         numerosDelCarrito();
//         localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras));
//         swal({
//             title: "¡Excelente!",
//             text: `Agregaste al carrito tu producto ${nombreProducto}`,
//             icon: "success",
//         });
//     } else {
//         swal({
//             title: "¡Error!",
//             text: "Lo sentimos no tenemos stock de este producto o el producto ya se encuentra en el carrito",
//             icon: "error",
//         });
//     }
// }

// function calculoDeltotalCarrito() {
//     let totalEnCarrito = 0;
//     carritoDeCompras.forEach((elemento) => {
//         totalEnCarrito += (elemento.precio * elemento.cantidad)
//     })
//     return totalEnCarrito
// }

// function numerosDelCarrito() {
//     let cantidadDeproductosEnCarrito = carritoDeCompras.reduce((acc, elemento) => acc + elemento.cantidad, 0)
//     cargarCantidadAlCarrito(cantidadDeproductosEnCarrito);
// }

// function eliminar(nombreProducto) {
//     let indiceProducto = carritoDeCompras.findIndex((indice) => indice.titulo === nombreProducto);
//     let producto = productos.find((producto) => producto.titulo === nombreProducto);
//     if (indiceProducto >= 0) {
//         producto.cantidad = 0;
//         carritoDeCompras.splice(indiceProducto, 1);
//         numerosDelCarrito();
//         localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras));
//         swal({
//             title: ":(",
//             text: `Se elimino con exito del carrito tu producto ${nombreProducto}`,
//             icon: "success",
//         });
//         verCarrito();
//         if (carritoDeCompras.length === 0) {
//             agregandoProductosAlmodal(``);
//         }
//     } else {
//         swal({
//             title: "¡Error!",
//             text: "El producto no se agrego al Carrito, asi que no se puede eliminar",
//             icon: "error",
//         });
//     }
// }
// function vaciarCarrito() {
//     swal({
//         title: "¿Estas Segur@?",
//         text: "Una vez que preciones OK, todos tus porductos seran eliminados",
//         icon: "warning",
//         buttons: true,
//         dangerMode: true,
//     })
//         .then((willDelete) => {
//             if (willDelete) {
//                 let longitud = carritoDeCompras.length;
//                 carritoDeCompras.splice(0, longitud);
//                 console.log(carritoDeCompras);
//                 let vaciarModal = ``;
//                 agregandoProductosAlmodal(vaciarModal);
//                 productos.forEach((elemento) => {
//                     elemento.cantidad = 0;
//                 })
//                 cargarCantidadAlCarrito(0);
//                 localStorage.removeItem("carritoDeCompras");
//                 swal("Se vaciaron todos los productos de tu carrito", {
//                     icon: "success",
//                 });
//             } else {
//                 swal({
//                     icon: "success",
//                     text: "Genial! tus productos aun siguen en el carrito"
//                 });
//             }
//         });
// }

// let botonBusqueda = document.getElementById("productoBuscado");
// botonBusqueda.addEventListener("keydown", buscarProducto);

// function agregandoProductosAlmodal(cards) {
//     document.getElementById("cuerpoModal").innerHTML = cards;
// }

// function verCarrito() {
//     let productosEnCarrito = ``;
//     carritoDeCompras.forEach((elemento) => {
//         productosEnCarrito += `
//         <tr>
//             <td class ="carritoCompras"> <img src="./assets/${elemento.imagen}.jpg"</td>
//             <td>${elemento.titulo}</td>
//             <td>${elemento.cantidad}</td>
//             <td>${elemento.precio} $USD</td>
//             <td><button class="btn btn-outline-dark" type="button" onclick="eliminar('${elemento.titulo}')">
//             <img class="my-auto mx-auto" width="20px" height="20px" src="./assets/boton-x.png" alt="Logo">
//             </button></td>
//         </tr>`
//         agregandoProductosAlmodal(productosEnCarrito);
//     })
//     totalCarrito();
// }

// function agregandoTotalAlCarrito(cards) {
//     document.getElementById("totalDeCompra").innerHTML = cards;
// }

// function totalCarrito() {
//     total = 0;
//     let totalDeCompra = calculoDeltotalCarrito();
//     agregandoTotalAlCarrito(`TOTAL A PAGAR = ${totalDeCompra} USD`);
// }