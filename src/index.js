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
  if(user.value === "" || user.value === null){
    msg.classList.add("bg-red-600");
    msg.textContent = "Debe ingresar un nombre de usuario.";
    user.style.boxShadow = "0 0 5px red";
    pass.style.boxShadow = "none";
    user.focus();
  }

  if (!regExpPass){
    msg.classList.add("bg-red-600");
    msg.textContent = "La contraseña debe contener al menos: 1 mayúscula, 1 minúscula, 1 dígito y 1 caracter especial.";
    pass.style.boxShadow = "0 0 5px red";
    pass.focus();
  }
  
  if (regExpUser && regExpPass) {
    msg.classList.remove("bg-red-600");
    msg.classList.add("bg-green-600");

    /*Aqui viene la función fetch que consigue los datos de la API y verifica si el correo ingresado existe en la "base de datos".
    1. Si el correo existe, le dará ingreso al sistema. 
    2. De lo contrario, para efectos de este ejercicio, puede pulsar en el enlace indicado para ver cierta información de los usuarios registrados. */
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => (data.some(obj => obj["email"] === user.value)) ? 
    msg.textContent = "Datos correctos, bienvenido al sistema." : 
    msg.innerHTML = `Correo no encontrado, pulse <a href="./mostrarUsuarios.html" style="text-decoration:underline">AQUÍ</a> para ver la lista de usuarios registrados.`);
  }
});
