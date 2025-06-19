// declaramos una funcion que se ejecutaal hacer clic en el boton

function validarEntrada() {
  // obtenemos el valor del input
  let valorIngresado = document.getElementById("entrada").value;

  // validamos si el valor esta vacio (falsy) o tiene contenido (truthy)
  if (valorIngresado) {
    // si tiene texto, mostramos un mensaje positivo

    document.getElementById("mensaje").textContent =
      "¡Gracias por escribir algo!";

    document.getElementById("mensaje").style.color = "green";
  } else {
    // si esta vacio, mostramosun mensaje de advertencia

    document.getElementById("mensaje").textContent =
      "El campo esta vacio, por favor escribe algo";

    document.getElementById("mensaje").style.color = "red";
  }
}
