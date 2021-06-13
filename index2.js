function cargarinicio(){

const miformulario = document.querySelector('#miformulario');
   miformulario.eddEventlistener("submit", async(e) => {
      e.preventDefault()

      const Cnombre = miformulario['nombre'].value;
      const Capellidos = miformulario['apellidos'].value;
      const Cedad = miformulario['edad'].value;
     
      const respuesta = await db.collection('personas').doc().set({
         nombre:Cnombre, apellidos:Capellidos,edad:Cedad
      })
      console.log(nombre + " . " +  Capellidos + " . " + Cedad);
   })
}