const score = document.querySelector('.score')
const paper = document.querySelector('.paper')
const rock = document.querySelector('.rock')
const scissors = document.querySelector('.scissors')
const rules = document.querySelector('.rules')
const modal = document.querySelector('.modal__container')
const close = document.querySelector('.close')



function openModal() {
  modal.style.display = 'block'
}

function closeModal() {
  modal.style.display = 'none'
}

rules.addEventListener('click', openModal);
close.addEventListener('click', closeModal);