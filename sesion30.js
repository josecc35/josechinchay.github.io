function crearproducto(nombre, precio) {
    var obj = {};
   obj. nombre = nombre;
    obj.precio = precio;
    obj.stock = stock
    return obj;
}

function cargarproductos() {
    let listaproductos =[  crearproducto('tv', 1500),
                            crearproducto('lavadora',1000),
                            crearproducto('licuadora',350),
                            crearproducto('radio',50) ];
    return listaproductos;                         
}


//cargar las tablas de los productos 
function cargarlistaproductos() {
    //posicionarlos dedbajo de la cabezera
    var tabla = document.getElementById('tbl_listaproductos')
    var contador = 0;
 listaproductos =  cargarproductos(); //cargo el array
 listaproductos.forEach(producto => {
     contador++;
    var fila = tabla.insertRow(-1); //creo la fila
    var celda0 = fila.insercell(0); //inserto la celada0
    celda0.innerHTML = producto.nombre; //cargo el dato en la
    var celda1 = fila.insercell(1);
    celda1.innerHTML = producto.precio
    var celda2 = fila.insercell(2);
    celda2.innerHTML = 'inpuy type ="text"/>';
    var celda3 = fila.insercell(3);
    celda3.innerHTML = '<inpuy tag="' +  contador +  '"type ="checkbox onclick="javascrip"/>';
    })
    return;
}

function habilitatexto(objeto){
    var tag = objeto.getattribute('tag');
    var texto = documenet.getElementById(tag);
    texto.disabled = !(texto.disabled);  //operador monario =NIEGA
    // Borrar el texto una vez quwe se vuelve a deshabilitar
}

function calculartotal(){  
    var tabla = document.getElementById("tbl_listaproductos");
    //itera mientras la fila exista.
    //(fila = tabla.rows[i]) = evalua la existencia
    for (var i=1, fila; fila = tabla.rows[i]; i++){
        if( document.getElementById("chk_" + i).checked){
            console.log("seleccionado fila" + i + "con precio => " + fila.cells[1].innerHTML +", cantidad = "+ document.getElementById(i).value);

        }
       
   }
}

