import './style.scss';
import saveScore from './modules/saveScore';
import successOrErrorMessage from './modules/succesOrErrorMessage';
import renderScores from './modules/renderScores';
import checkGameID from './modules/checkGameID';
import newGameID from './modules/newGameID';
import {
  newGameBtn, newGameName, oldGameBtn, oldGameID, refreshBtn, userName,
  userScore, addScoreBtn, displayID, gameIdSpan, introSection, boardSection,
  startNewGameD, startNewGameM, smallNameError, smallScoreError,
} from './modules/domElements';
import getScores from './modules/getScores';
import { checkInputName, checkInputScore } from './modules/checkInput';

const gameID = checkGameID();
if (typeof gameID !== 'undefined') {
  renderScores();
}
newGameBtn.addEventListener('click', () => {
  window.localStorage.setItem('Game ID', JSON.stringify(newGameID(newGameName.value)));
  renderScores();
});

oldGameBtn.addEventListener('click', () => {
  getScores(oldGameID.value);
  renderScores();
  gameIdSpan.innerText = oldGameID.value;
  window.localStorage.setItem('Game ID', JSON.stringify(oldGameID.value));
});

userName.addEventListener('change', () => {
  if (checkInputName(userName.value) !== true) {
    smallNameError.innerText = checkInputName(userName.value);
  } else {
    smallNameError.innerText = '';
  }
});

userScore.addEventListener('change', () => {
  if (checkInputScore(userScore.value) !== true) {
    smallScoreError.innerText = checkInputScore(userScore.value);
  } else {
    smallScoreError.innerText = '';
  }
});

addScoreBtn.addEventListener('click', () => {
  if (checkInputName(userName.value) === true && checkInputScore(userScore.value) === true) {
    const apiReturn = saveScore(userName.value, userScore.value, gameID);
    successOrErrorMessage(apiReturn);
  } else if (checkInputName(userName.value) !== true) {
    alert(checkInputName(userName.value, userScore.value));
  } else if (checkInputScore(userName.value) !== true) {
    alert(checkInputScore(userName.value, userScore.value));
  }
});

refreshBtn.addEventListener('click', () => {
  renderScores(gameID);
});

startNewGameD.addEventListener('click', () => {
  introSection.classList.remove('hide');
  boardSection.classList.add('hide');
  displayID.classList.add('hide');
});

startNewGameM.addEventListener('click', () => {
  introSection.classList.remove('hide');
  boardSection.classList.add('hide');
  displayID.classList.add('hide');
});
