// mensaje de bienvenida
function mostrar() {
    var miDiv = Document.getElementById("bienvenido")
    alert(miDiv.style.bordercolor);
    if (miDiv.style.display === "none") {
        // muestro la etiqueta div
        miDiv.style.display = "block";
        //oculto la etiqueta div
        miDiv.style.display = "none"
    }
}