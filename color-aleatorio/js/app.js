const color = document.getElementById('color')
const btn = document.getElementById('btn-color')

function colorHexAleatorio() {
    let digitos = '0123456789ABCDEF'
    let colorHex = '#'

    for (let i = 0; i < 6; i++) {
        let indice = Math.floor(Math.random() * 16)
        colorHex += digitos[indice]
    }
    return colorHex
}

btn.addEventListener('click', function () {
    let newColor = colorHexAleatorio()
    color.innerText = newColor
    document.body.style.backgroundColor = newColor
})
