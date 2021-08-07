//Frutas =>manzana, cereza,uva, ....
function crearFruta(nombre,ptrecio,cantidad){
  var obj={};
  obj.nombre = nombre;
  obj.precio = precio;
  obj.cantidad = cantidad;
  obj.calcularpreciototal = function() {
  return obj.precio * obj.cantidad; 
       };
       return obj;
}


//funcion que carga las frutas nuevas
function cargarfruta(nombre,precio,cantidad){
    var mifruta = crearfruta(nombre,precio,cantidad)
    var Listafrutas = document.getElementById('listafrutas');

    Listafrutas.innerHTML = Listafrutas.innerHTML +
    'nombre: ' +mifruta.nombre +
    '-Precio: ' +mifruta.precio +
    '- Cantidad:' +mifruta.cantidad +
    '-ttal:' + miFruta.calcularpreciototal() +
    '<br>';   
}