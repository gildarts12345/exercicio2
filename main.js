const msg = document.querySelector('label');
const botao = document.querySelector('button');
const formTabuada = document.querySelector('#form');
const tabuada = document.querySelector('#resultado-tabuada');
const multiplicador = document.querySelector('#multiplicador');

formTabuada.addEventListener('submit', function(event) {
  event.preventDefault();
  calcularTabuada(multiplicador.value, tabuada);
});

function calcularTabuada(valor, elementoAlvo) {
  const multiplicador = parseInt(valor);

  if (!!multiplicador || multiplicador == 0) {
    elementoAlvo.innerHTML = '';
    msg.innerText = 'Tabuada de '+ multiplicador;
    msg.style.color = 'blue';

    for (let multiplicando = 1; multiplicando <= 10; multiplicando++) {
      elementoAlvo.innerHTML += '<tr>'+
        '<td>' + multiplicando + '</td>'+
        '<td>x</td>'+
        '<td>' + multiplicador + '</td>'+
        '<td>= </td>'+
        '<td>' + (multiplicando  * multiplicador)+ '</td>'+
        '</tr>';
    }

  } else {
    elementoAlvo.innerHTML = '';
    msg.innerText = 'Somente números';
    msg.style.color = 'red';
  }
}