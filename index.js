function relogio() {
  let horas = document.getElementById("horas")
  let minutos = document.querySelector("#minutos")
  let segundos = document.querySelector("#segundos")

  var data = new Date()

  let hora = data.getHours().toString().padStart(2, '0');
  let minuto = data.getMinutes().toString().padStart(2, '0');
  let segundo = data.getSeconds().toString().padStart(2, '0');


  horas.querySelector('p').textContent = hora
  minutos.querySelector('p').textContent = minuto
  segundos.querySelector('p').textContent = segundo

}

setInterval(relogio, 1000);

relogio()
