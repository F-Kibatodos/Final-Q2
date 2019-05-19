const container = document.querySelector('.container')
const red = document.getElementById('red')
const green = document.getElementById('green')
const blue = document.getElementById('blue')
const hex = document.querySelector('.hex h2')

container.addEventListener('input', event => {
  let r = red.value
  let g = green.value
  let b = blue.value
  displayValue(event.target)
  container.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  hex.textContent = '#' + toHex(red) + toHex(green) + toHex(blue)
})

const toHex = color => Number(color.value).toString(16).padStart(2, '0').toUpperCase()
const displayValue = color => {
  if (event.target === color) color.nextElementSibling.textContent = color.value
}
