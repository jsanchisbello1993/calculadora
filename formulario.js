// (function(){
  let formulario = document.getElementById('formulario'),
    nombre = formulario.nombre,
    correo = formulario.correo,
    mensaje = formulario.mensaje,
    terminos = formulario.terminos,
    error = document.getElementById('error');

    function validarNombre(e){
      if (nombre.value == '' || nombre.value == null) {
          console.log('Por favor completa el nombre');
          error.style.display = 'block';
          error.innerHTML += '<li>Por favor completa el nombre</li>';
          e.preventDefault();
      } else{
        error.style.display = 'none';
      }
    }
    function validarCorreo(e){
      if (correo.value == '' || correo.value == null) {
          console.log('Por favor completa el correo');
          error.style.display = 'block';
          error.innerHTML +='<li>Por favor completa el correo</li>';
          e.preventDefault();
      }else{
        error.style.display = 'none';
      }
    }

    function validarMensaje(e){
      if (mensaje.value == '' || mensaje.value == null) {
          console.log('Por favor completa el campo de texto');
          error.style.display = 'block';
          error.innerHTML +='<li>Por favor completa el campo de texto</li>';
          e.preventDefault();
      }else{
        error.style.display = 'none';
      }
    }


    function validarTerminos(e){
      if (terminos.checked == false) {
          console.log('Por favor completa el terminos');
          error.style.display = 'block';
          error.innerHTML += '<li>Por favor acepte terminos y condiciones</li>';
            e.preventDefault();
      }else{
        error.style.display = 'none';
      }
    }
    function validarFormulario(e){
      error.innerHTML = "";
      validarNombre(e);
      validarCorreo(e);
      validarMensaje(e);
      validarTerminos(e);
    }

    formulario.addEventListener('submit', validarFormulario);

// })())
