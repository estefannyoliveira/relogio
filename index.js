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


let fundo = document.getElementById('fundo');
let fundoHoras = document.querySelector('#horas p')
let fundoMin = document.querySelector('#minutos p')
let fundoSeg = document.querySelector('#segundos p')


if(hora >= 5 && hora < 13){
  fundo.className = 'dia'
  fundoHoras.className = 'diaFundo';
  fundoMin.className = 'diaFundo';
  fundoSeg.className = 'diaFundo';

}else if(hora >= 13 && hora < 18){
  fundo.className = 'tarde';
  fundoHoras.className = 'tardeFundo';
  fundoMin.className = 'tardeFundo';
  fundoSeg.className = 'tardeFundo';
}else if(hora <= 5 && hora > 18){
  fundo.className = 'noite'
  
}




}

setInterval(relogio, 1000);

relogio()

