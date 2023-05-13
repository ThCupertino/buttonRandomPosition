const button = document.getElementById('btnNo')
let card = document.getElementById('card')

button.addEventListener('mouseover', (event) => {
  
  var vertical = Math.floor(Math.random() * 400);
  var horizontal = Math.floor(Math.random() * 1280);
  button.style.position = "absolute";
  button.style.left = horizontal + "px";
  button.style.top = vertical + "px";
})

function switchTheme() {
  document.body.classList.toggle('isLight')
  document.body.classList.toggle('isDark')
}

document.getElementById("switchBtn").addEventListener('click', switchTheme)
