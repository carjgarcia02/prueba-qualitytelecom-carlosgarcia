/* Para este ejemplo se decidió que el usuario ingresará con su email y contraseña.*/
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  //Campos para ingresar los datos
  let user = document.getElementById("user");
  let pass = document.getElementById("password");

  //Mensaje de validación de datos
  const msg = document.getElementById("message");

  //Expresiones regulares
  const regExpUser = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(user.value);

  const regExpPass =
    /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,64}$/.test(
      pass.value
    ); //Por lo menos un dígito 0-9, una mayúscula, una minúscula y un caracter especial, no acepta espacios, longitud 8-64 caracteres.

  //Validaciones
  /* if (usuario.value === "" || contra.value === "") {
    mensaje.classList.remove("bg-green-600");
    mensaje.classList.add("bg-red-600");
    mensaje.textContent = "Hay campos vacíos, por favor llénelos todos.";
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
  } */

  if(pass.value === "" || pass.value === null){
    msg.classList.add("bg-red-600");
    msg.textContent = "Por favor escriba una contraseña.";
    pass.style.boxShadow = "0 0 5px red";
    pass.focus();
  }

  if(user.value === "" || user.value === null){
    msg.classList.add("bg-red-600");
    msg.textContent = "Debe ingresar un nombre de usuario.";
    user.style.boxShadow = "0 0 5px red";
    pass.style.boxShadow = "none";
    user.focus();
  }

  if (!regExpUser || !regExpPass) {
    msg.classList.add("bg-red-600");
    msg.textContent = "Por favor digite correo y contraseña válidos.";
  }

  if (regExpUser && regExpPass) {
    msg.classList.remove("bg-red-600");
    msg.classList.add("bg-green-600");
    msg.textContent = "Datos correctos, puede ingresar al sistema.";
  }

});
