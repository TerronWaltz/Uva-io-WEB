// Obtener referencias a los elementos
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const playerNameInput = document.getElementById('playerName');

// Configuración inicial del juego
let player = {
  name: '',
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 20,
  color: '#6a0dad', // Púrpura como una uva
};

// Función para iniciar el juego
function startGame() {
  player.name = playerNameInput.value || 'Jugador';
  console.log(`Bienvenido, ${player.name}!`);
  document.getElementById('menu').style.display = 'none'; // Ocultar el menú
  gameLoop(); // Comenzar el juego
}

// Función para renderizar al jugador
function drawPlayer() {
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
  ctx.fillStyle = player.color;
  ctx.fill();
  ctx.closePath();
}

// Función principal del juego
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
  drawPlayer(); // Dibujar al jugador
  requestAnimationFrame(gameLoop); // Loop continuo
}

// Evento para el botón de inicio
startButton.addEventListener('click', startGame);
