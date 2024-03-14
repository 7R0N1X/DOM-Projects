// Elementos del DOM
const cronometro = document.getElementById('cronometro');
const btnInicioPausa = document.getElementById('btn-inicio-pausa');
const btnReiniciar = document.getElementById('btn-reiniciar');

let [horas, minutos, segundos] = [0, 0, 0]; // Inicialización del tiempo
let intervalo; // Almacena el identificador del intervalo
let estadoCronometro = 'pausado'; // Estado inicial del cronómetro

// Función para actualizar el cronómetro en cada segundo
function actualizarCronometro() {
  segundos++;
  if (segundos === 60) { // Si los segundos llegan a 60
    segundos = 0; // Reiniciar los segundos
    minutos++; // Incrementar los minutos
    if (minutos === 60) { // Si los minutos llegan a 60
      minutos = 0; // Reiniciar los minutos
      horas++; // Incrementar las horas
    }
  }
  // Mostrar el tiempo formateado en el cronómetro
  cronometro.innerText = `${formatoTiempo(horas)}:${formatoTiempo(minutos)}:${formatoTiempo(segundos)}`;
}

// Función para agregar ceros a la izquierda si el valor es menor que 10
function formatoTiempo(tiempo) {
  return tiempo < 10 ? '0' + tiempo : tiempo;
}

// Función para alternar entre iniciar y pausar el cronómetro
function toggleCronometro() {
  estadoCronometro === 'pausado' ? iniciarCronometro() : pausarCronometro();
}

// Función para iniciar el cronómetro
function iniciarCronometro() {
  intervalo = setInterval(actualizarCronometro, 1000); // Iniciar el intervalo de actualización del cronómetro
  // Cambiar el ícono del botón a pausa y actualizar clases CSS
  btnInicioPausa.innerHTML = `<i class="bi bi-pause-fill"></i>`;
  btnInicioPausa.classList.remove('iniciar');
  btnInicioPausa.classList.add('pausar');
  estadoCronometro = 'activo'; // Actualizar el estado del cronómetro a activo
}

// Función para pausar el cronómetro
function pausarCronometro() {
  clearInterval(intervalo); // Detener el intervalo de actualización del cronómetro
  // Cambiar el ícono del botón a reproducir y actualizar clases CSS
  btnInicioPausa.innerHTML = `<i class="bi bi-play-fill"></i>`;
  btnInicioPausa.classList.remove('pausar');
  btnInicioPausa.classList.add('iniciar');
  estadoCronometro = 'pausado'; // Actualizar el estado del cronómetro a pausado
}

// Función para reiniciar el cronómetro
function reiniciarCronometro() {
  clearInterval(intervalo); // Detener el intervalo de actualización del cronómetro
  [horas, minutos, segundos] = [0, 0, 0]; // Reiniciar variables de tiempo
  cronometro.innerText = '00:00:00'; // Mostrar tiempo reiniciado en el cronómetro
  // Restaurar el ícono y las clases del botón
  btnInicioPausa.innerHTML = `<i class="bi bi-play-fill"></i>`;
  btnInicioPausa.classList.remove('pausar');
  btnInicioPausa.classList.add('iniciar');
  estadoCronometro = 'pausado'; // Actualizar el estado del cronómetro a pausado
}

// Evento clic para alternar iniciar/pausar el cronómetro
btnInicioPausa.addEventListener('click', toggleCronometro);
// Evento clic para reiniciar el cronómetro
btnReiniciar.addEventListener('click', reiniciarCronometro);
