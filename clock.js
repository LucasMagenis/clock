const timer = new easytimer.Timer();
const clock = document.getElementById('clock');

timer.addEventListener('secondsUpdated', () => {
  clock.textContent = timer.getTimeValues().toString(['minutes', 'seconds']);
});

const botaoPomodoro = document.getElementById("pomodoro");
const botaoPausaCurta = document.getElementById("pausaCurta");
const botaoPausaLonga = document.getElementById("pausaLonga");

const botaoFinalizar = document.getElementById("finalizar");
const botaoIniciar = document.getElementById("iniciar");
const botaoPausar = document.getElementById("pausar");

const botoes = document.querySelectorAll('.botoes');

function limpa(){
  for (const bt of botoes) {
    bt.classList.remove('btn-active');
  }
}

botaoIniciar.addEventListener('click', () => {
  timer.start({ countdown: true, startValues: { minutes: 25} });
  botaoIniciar.classList.toggle('hidden');
  botaoPausar.classList.toggle('hidden');
})

botaoPausar.addEventListener('click', () => {
  timer.pause()
  botaoIniciar.classList.toggle('hidden')
  botaoPausar.classList.toggle('hidden')
})

botaoFinalizar.addEventListener('click', () => {
  timer.stop()
  botaoIniciar.classList.toggle('hidden');
  botaoPausar.classList.toggle('hidden');
  botaoPomodoro.click();
})


// botaoFinalizar.addEventListener('click', () => {
//   clock.textContent = "00:00";
//   limpa();
//   botaoFinalizar.classList.add('btn-active');
// })

botaoPomodoro.addEventListener('click', () => {
  clock.textContent = "25:00";
  limpa();
  botaoPomodoro.classList.add('btn-active');
})

botaoPausaCurta.addEventListener('click', () => {
  clock.textContent = "05:00";
  limpa();
  botaoPausaCurta.classList.add('btn-active');
})

botaoPausaLonga.addEventListener('click', () => {
  clock.textContent = "15:00";
  limpa();
  botaoPausaLonga.classList.add('btn-active');
})

// botaoFinalizar.addEventListener('click', () => {
//   clock.textContent = "00:00";
//   limpa();
//   botaoFinalizar.classList.add('btn-active');
// })

const lista = document.getElementById("lista");
const botaoNova = document.getElementById("nova");

botaoNova.addEventListener('click', () =>{

  const li = document.createElement('li');
  const input = document.createElement('input');

  input.type = "text";
  input.placeholder = "Digite sua tarefa";

  li.appendChild(input);
  lista.appendChild(li);
  input.focus();

})