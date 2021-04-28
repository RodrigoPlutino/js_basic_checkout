
/* GENERAR PRODUCTOS EN DOM */

function mostrarProductos(listado) {

    $("#contenidoGenerado").empty();

    for (const objeto of listado) {
        $("#contenidoGenerado").append(

`<div class="card-body">
    <h5 class="card-title">${objeto.nombre}</h5>
    <p class="card-text">${objeto.data}</p>
    <button id="${objeto.id}" type="button" class="btn btn-outline-primary btn-add col-5">Agregar al carrito por $${objeto.precio}</button>
</div>
<div class="card-footer text-muted"> </div>`
        );
    }
    
} 

mostrarProductos(DATOSAPP);

/* AÑADIR + MOSTRAR EN CARRITO + SLIDE DOWN */
$(".btn-add").click(function (e){ 
    let elementMatch = DATOSAPP.find(function(element){return element.id == e.target.id});
    SELECCIONADOS.push(new Producto (elementMatch));


    let total = 0; /* Monto carrito arranca en 0 */
    let artTotal = 0; /* Art carrito arranca en 0 */

    $("#productos").empty(); 
    $("#count").empty();

    for (const añadidos of SELECCIONADOS) {
        total = total + añadidos.precio;
        artTotal = artTotal + añadidos.unidad;
        $("#productos").append(
            `<li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 class="my-0">${añadidos.nombre}</h6>
                    <small><a class="text-muted btn-delete" href="#">Eliminar de carrito</a></small>
                </div>
                <span class="text-muted">$${añadidos.precio}</span>
            </li>`);}

    $("#productos").append(
        `<li class="list-group-item d-flex justify-content-between">
            <span>Total (ARS)</span>
            <strong>$${total}</strong>
        </li>
        <li id="finalize-box" class="list-group-item d-flex justify-content-center">
            <button id="finalize" type="button" class="btn btn-outline-success">Finalizá tu compra</button>
        </li>`);

    $("#count").append(artTotal);});


    $(".btn-delete").click(function (e) { 
        $("#productos").toggle()
    }); /* Pendiente de configurar para eliminar producto de carrito */


/*NAVBAR BUSQUEDA */

$("#busqueda").click(function (e) {
    let valor = $("#find-value").val();
    const elementFinded = DATOSAPP.filter(function(element){return element.nombre == valor});
    console.log(elementFinded)
    mostrarProductos(elementFinded);
});

$("#limpiar").click(function (e) {
    mostrarProductos(DATOSAPP);
});




