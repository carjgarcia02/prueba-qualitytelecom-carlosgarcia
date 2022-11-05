# Prueba técnica presentada para la empresa Quality-Telecom Ltda.

## Candidato: Carlos Jesús García Rosas. Desarrollador front-end.

## Descripción del proyecto:

Formulario para login de usuarios creado con HTML, JavaScript y Tailwind CSS.

El formulario es responsive, y cuenta con validaciones tanto en HTML como en JavaScript para los datos ingresados.

## Cómo iniciar el proyecto:

Basta con ir al archivo index.html dentro de la carpeta src y abrirlo con Google Chrome, por ejemplo.

Otra forma es abrir el mismo archivo desde su editor de código.

## Desafíos encontrados y soluciones:

a) Validaciones de los datos con JavaScript: esto implicaba utilizar expresiones regulares, con las cuales no estaba familiarizado. También la lógica de los condicionales fue algo tediosa al principio. 

Solución: buscar ejemplos de expresiones regulares típicas en Internet e implementarlas en mi código.

b) Se me pidió de alguna manera realizar una tarea relacionada con el back-end, a pesar de ser desarrollador front-end. Específicamente se me pidió reemplazar la parte backend de la prueba con un archivo php que leyera una base de datos.

En un comienzo intenté un par de soluciones, que no dieron frutos debido a mi falta de conocimientos sobre back-end:

1. Buscar un tutorial e implementar un servidor con Node.js y Express, para luego crear la base de datos con MongoDB, lo cual intenté pero resultó inviable para mi.

2. Crear una base de datos MYSQL y luego mostrar esos datos en el front-end a través de un archivo .php. Esta solución era bastante más sencilla, pero me sentía incómodo.

Solución: Decidí plantear una propuesta distinta. Hacer el ejercicio desde el front-end, utilizando la función fetch para consumir una API de prueba y comparar el correo ingresado por el usuario con los existentes dentro de los datos extraídos.

Si el correo existe, el formulario le da la bienvenida al sistema. De lo contrario, se muestra un mensaje con un link que lleva al archivo mostrarUsuarios.html, donde se exhiben los datos que contiene la API consultada.

Considero apropiada esta solución, ya que me permitió reforzar y validar aún más mis conocimientos de front-end, además de aumentar mi entusiasmo por aprender desarrollo back-end eventualmente. 

