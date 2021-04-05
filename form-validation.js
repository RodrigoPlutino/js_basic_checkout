// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  }, false)
})()

var listaArticulos = [];

var listaPrecio = [];

var sumaListaPrecio = 0;



$ ("#agregar").click (agregar);

function agregar() {

    var articulo = document.getElementById("articulo").value;
    listaArticulos.push(articulo);

    var precio = parseInt(document.getElementById("precio").value);
    listaPrecio.push(precio);

    console.log("Articulo: "+articulo+" Precio: "+precio);

}


$ ("#sumar_productos").click (sumar_productos);

function sumar_productos(){
  var total = 0;
  for (var i=0; i < listaPrecio.length; i++){
      total = total + listaPrecio[i];}

console.log(total);



for (var i=0; i < listaPrecio.length; i++) {
  sumaListaPrecio += listaPrecio[i];
}

$("#monto-total").text('$' + sumaListaPrecio);



for (var i = 0; i < listaPrecio.length; i++){

    var ship_box = document.createElement("li");
    ship_box.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'lh-condensed');
    $("#cart-list").append(ship_box);

    var ship_data = document.createElement("div");
    ship_data.setAttribute("id", "product-price");
    ship_data.classList.add('text-muted');
    $ ( "#cart-list li:last-child" ).append(ship_data);

    var product_name = document.createElement("h6");
    product_name.innerHTML = listaArticulos[i];
    product_name.classList.add('my-0');
    $ ( "#cart-list li:last-child div" ).append(product_name);

    var product_description = document.createElement("small");
    product_description.innerHTML = "Descripcion corta";
    product_description.classList.add('text-muted');
    $ ( "#cart-list li:last-child div" ).append(product_description);

    var product_price = document.createElement("span");
    product_price.innerHTML = "$"+listaPrecio[i];
    product_price.classList.add('text-muted');
    $ ( "#cart-list li:last-child" ).append(product_price);
}}




$ (document) 