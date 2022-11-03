/* Para este ejemplo se decidió que el usuario ingresará con su email y contraseña.*/
document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault();

  //Campos para ingresar los datos
  let usuario = document.getElementById("usuario");
  let contra = document.getElementById("contraseña");

  //Mensaje de validación de datos
  const mensaje = document.getElementById("message");

  //Expresiones regulares
  const expRegUsuario = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(usuario.value);

  const expRegContra =
    /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,64}$/.test(
      contra.value
    ); //Por lo menos un dígito 0-9, una mayúscula, una minúscula y un caracter especial, no acepta espacios, longitud 8-64 caracteres.

  //Validaciones
  if (usuario.value === "" || contra.value === "") {
    mensaje.classList.remove("bg-green-600");
    mensaje.classList.add("bg-red-600");
    mensaje.innerHTML = "Hay campos vacíos, por favor llénelos todos.";
    if (usuario.value === "") {
      usuario.style.boxShadow = "0 0 5px red";
      usuario.focus();
    } else if (contra.value === "") {
      usuario.style.boxShadow = "none";
      contra.style.boxShadow = "0 0 5px red";
      contra.focus();
    } else if (usuario.value === "" && contra === "") {
      usuario.style.boxShadow = "0 0 5px red";
      contra.style.boxShadow = "0 0 5px red";
      usuario.focus();
    }
  } else if (!expRegUsuario || !expRegContra) {
    mensaje.classList.add("bg-red-600");
    mensaje.innerHTML = "Por favor digite correo y contraseña válidos.";
    usuario.focus();
  } else if (expRegUsuario && expRegContra) {
    if (mensaje.classList.contains("bg-red-600")) {
      mensaje.classList.remove("bg-red-600");
    }
    mensaje.classList.add("bg-green-600");
    mensaje.innerHTML = "Datos correctos, puede ingresar al sistema.";
  }
});
