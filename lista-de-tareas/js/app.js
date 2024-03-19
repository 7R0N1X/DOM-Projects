const input = document.getElementById("ingresar-tarea");
const boton = document.querySelector("button");
const listaDeTarea = document.getElementById("lista-de-tareas");

function aggTarea() {
  if (input.value) {
    let tareaNueva = document.createElement("div");
    tareaNueva.classList.add("tarea");

    let text = document.createElement("p");
    text.innerText = input.value;
    tareaNueva.appendChild(text);

    let iconos = document.createElement("div");
    iconos.classList.add("iconos");
    tareaNueva.appendChild(iconos);

    let completar = document.createElement("i");
    completar.classList.add("bi", "bi-check-circle-fill", "icono-completar");
    iconos.appendChild(completar);
    completar.addEventListener("click", completarTarea);

    let eliminar = document.createElement("i");
    eliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminar");
    iconos.appendChild(eliminar);
    eliminar.addEventListener("click", eliminarTarea);

    listaDeTarea.appendChild(tareaNueva);
  } else {
    alert("Ingresa una tarea");
  }
}

function completarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle("completada");
}

function eliminarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
}

boton.addEventListener("click", aggTarea);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    aggTarea();
  }
});
