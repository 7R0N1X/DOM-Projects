let btn = document.getElementById('btn-cambiar-cita')
let cita = document.getElementById('cita')
let autor = document.getElementById('autor')

function numRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function cambiarCita() {
  let indiceRandom = numRandom(0, citas.length)
  cita.innerText = `"${citas[indiceRandom].texto}"`
  autor.innerText = citas[indiceRandom].autor
}

cambiarCita()

btn.addEventListener('click', cambiarCita)