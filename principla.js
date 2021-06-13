function compara() {
  var bandera = false;
  var numero1 = document.getElementById('numero1').value;
  var numero2 = document.getElementById('numero2').value

  console.log(numero1);
  console.log(numero2);

   if(numero1>numero2) {
       bandera=true;
   }
   document.getElementById('respuesta1').innerHTML = bandera;
}