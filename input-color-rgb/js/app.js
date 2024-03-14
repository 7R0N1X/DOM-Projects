const inputR = document.getElementById('rojo')
const inputG = document.getElementById('verde')
const inputB = document.getElementById('azul')

const textR = document.getElementById('text-rojo')
const textG = document.getElementById('text-verde')
const textB = document.getElementById('text-azul')

let r = inputR.value
let g = inputG.value
let b = inputB.value

textR.innerText = r
textG.innerText = g
textB.innerText = b

function actualizarColor(r, g, b) {
  const colorRGB = `rgb(${r}, ${g}, ${b})`
  document.body.style.backgroundColor = colorRGB
}

inputR.addEventListener('change', (e) => {
  r = e.target.value
  textR.innerText = r
  actualizarColor(r, g, b)
})

inputG.addEventListener('change', (e) => {
  g = e.target.value
  textG.innerText = g
  actualizarColor(r, g, b)
})

inputB.addEventListener('change', (e) => {
  b = e.target.value
  textB.innerText = b
  actualizarColor(r, g, b)
})