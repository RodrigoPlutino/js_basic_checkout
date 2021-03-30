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


document.getElementById("agregar").onclick = agregar;

function agregar() {

    var articulo = document.getElementById("articulo").value;
    listaArticulos.push(articulo);

    var precio = parseInt(document.getElementById("precio").value);
    listaPrecio.push(precio);

    console.log("Articulo: "+articulo+" Precio: "+precio);

}


document.getElementById("sumar_productos").onclick = sumar_productos;

function sumar_productos(){
  var total = 0;
  for (var i=0; i < listaPrecio.length; i++){
      total = total + listaPrecio[i];}

console.log(total);

const total_price = document.createElement("li");
total_price.setAttribute("id", "total-price");
total_price.classList.add('list-group-item', 'd-flex', 'justify-content-between');
document.getElementById("cart-list").appendChild(total_price);

const parrafo = document.createElement("strong");
parrafo.innerHTML = "Total: $" + total;
document.getElementById("total-price").appendChild(parrafo);

for (var i = 0; i < listaPrecio.length; i++){
  

    var product_name = document.createElement("h6");
    product_name.innerHTML = listaArticulos[i];
    product_name.classList.add('my-0');
    document.getElementById("product-name").appendChild(product_name);

    var product_description = document.createElement("small");
    product_description.innerHTML = "Descripcion corta";
    product_description.classList.add('text-muted');
    document.getElementById("product-name").appendChild(product_description);

    var product_price = document.createElement("span");
    product_price.innerHTML = "$"+listaPrecio[i];
    product_price.classList.add('text-muted');
    document.getElementById("product-price").appendChild(product_price);
}}



