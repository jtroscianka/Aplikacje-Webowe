const clock = document.getElementById('clock');

function setClock() {
  const now = new Date();
  clock.innerText = now.toLocaleTimeString('pl-PL');
}

setInterval(setClock, 1000);
setClock();
