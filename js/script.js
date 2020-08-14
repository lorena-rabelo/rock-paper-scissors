const score = document.querySelector('.score')
const paper = document.querySelector('.paper')
const rock = document.querySelector('.rock')
const scissors = document.querySelector('.scissors')
const rules = document.querySelector('.rules')
const modal = document.querySelector('.modal__container')
const pickOne = document.querySelector('.pickOne') //revisaaaar nome
const closeModal = document.querySelector('.close')
const secondary = document.querySelector('.secondary')
let arr = [paper, scissors, rock];
let random = Math.floor(Math.random() * 3);
let housePicked = arr[random];
let personPicked;
let whoWin = document.querySelector('.whoWin')
const main = document.querySelector('main')

// modal - rules
rules.onclick = () => {
  modal.style.display = 'block'
  main.classList.add('blur')
}

closeModal.onclick = () =>{ 
  modal.style.display = 'none'
  main.classList.remove('blur')
}



paper.onclick = () => {
  personPicked = paper;
  pickOne.style.display = 'none'
  displayPicked()
};

scissors.onclick = () => {
  personPicked = scissors;
  pickOne.style.display = 'none'
  displayPicked()
};

rock.onclick = () => {
  personPicked = rock;
  pickOne.style.display = 'none'
  displayPicked()
};

function displayPicked() {
  secondary.style.display = 'flex';
  whoWin.style.display = 'none'
  let housePickedContainer = document.querySelector('.house-picked');
  let youPickedContainer = document.querySelector('.you-picked');
  setTimeout( function() {
    console.log( 'Executa uma vez após 5 segundo.' );
    youPickedContainer.innerHTML = youPickedContainer.innerHTML + personPicked.outerHTML;
  }, 500 );
  // Add the old content with the new content so innerHTML won't override the old content.
  housePickedContainer.innerHTML = housePickedContainer.innerHTML + housePicked.outerHTML;
}


