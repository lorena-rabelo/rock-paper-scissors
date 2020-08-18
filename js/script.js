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


// GET OR SET SCORE IN LOCAL STORAGE
// if (localStorage.getItem('score') == null) {
// 	localStorage.setItem('score', score);
// 	displayScore.textContent = score;
// } else {
// 	score = localStorage.getItem('score');
// 	displayScore.textContent = score;
// }

// MODAL - RULES
rules.onclick = () => {
  modal.style.display = 'block'
  main.classList.add('blur')
}

closeModal.onclick = () => {
  modal.style.display = 'none'
  main.classList.remove('blur')
}

paper.onclick = () => {
  personPicked = paper;
  pickOne.style.display = 'none'
  displayPicked()
  displayWinner()
};

scissors.onclick = () => {
  personPicked = scissors;
  pickOne.style.display = 'none'
  displayPicked()
  displayWinner()
};

rock.onclick = () => {
  personPicked = rock;
  pickOne.style.display = 'none'
  displayPicked()
  setTimeout(displayWinner, 1400);
  setTimeout(teste, 1400);

};

let housePickedContainer = document.querySelector('.house-picked');
let youPickedContainer = document.querySelector('.you-picked');

function displayPicked() {
  secondary.style.display = 'flex';
  whoWin.style.display = 'none'
  setTimeout(function () {
    personPicked.classList.add('transform')
    // Add the old content with the new content so innerHTML won't override the old content
    youPickedContainer.innerHTML = youPickedContainer.innerHTML + personPicked.outerHTML;
  }, 400);
  setTimeout(function () {
    housePicked.classList.add('transform')
    housePickedContainer.innerHTML = housePickedContainer.innerHTML + housePicked.outerHTML;
  }, 800);
  
}


function reset() {
  const pickedCircles = document.querySelectorAll('.secondary .circle');
  for (circle of pickedCircles) {
    circle.parentNode.removeChild(circle);
  }

  secondary.style.display = 'none';
  personPicked.classList.remove('transform')
  housePicked.classList.remove('transform')
  pickOne.style.display = 'flex'

  // Reasign random value 
  random = Math.floor(Math.random() * 3);
  housePicked = arr[random];

}

const btnReplay = document.querySelector('.play-again')
btnReplay.addEventListener('click', reset)

function displayWinner() {
  setTimeout(() => {
    whoWin.style.display = 'block'
    secondary.classList.add('expand')
  }, 1000)


  let whoWinText = document.querySelector('.whoWin--text')

  if (
    personPicked === paper && housePicked === paper ||
    personPicked === scissors && housePicked === scissors ||
    personPicked === rock && housePicked === rock) {
    whoWinText.textContent = 'It is a tie';
  }
  else if (personPicked === paper && housePicked === scissors ||
    personPicked === scissors && housePicked === rock ||
    personPicked === rock && housePicked === paper) {
    btnReplay.classList.add('lost')
    whoWinText.textContent = 'You Lose!';
    // score--;
    // displayScore.textContent = score;
    // localStorage.setItem('score', score)
  }
  else if (personPicked === paper && housePicked === rock ||
    personPicked === scissors && housePicked === paper ||
    personPicked === rock && housePicked === scissors) {
    whoWinText.textContent = 'You win';
    // score++;
    // displayScore.textContent = score;
    // localStorage.setItem('score', score)
  }
}
