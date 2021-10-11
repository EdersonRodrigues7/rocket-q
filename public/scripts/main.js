import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');

const checkButtons = document.querySelectorAll('.check');

checkButtons.forEach(button => {
  button.addEventListener('click', handleClick);
});

const deleteButtons = document.querySelectorAll('.actions a.delete');

deleteButtons.forEach(button => {
  button.addEventListener('click', event => handleClick(event, false));
});

function handleClick(event, check = true) {
  event.preventDefault();

  // Declaração de variáveis
  const text = check ? 'Marcar como lida' : 'Excluir';
  const roomId = document.getElementById('room-id').dataset.id;
  const slug = check ? 'check' : 'delete';
  const questionId = event.target.dataset.id;
  const form = document.querySelector('.modal form');

  // Detalhes do Modal

  modalTitle.innerHTML = check ? text : `${text} Pergunta`;
  modalDescription.innerHTML = `Tem certeza que você deseja ${text.toLowerCase()} ?`;
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`;
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red');

  // Envio de formulário
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`);

  modal.open();
}
