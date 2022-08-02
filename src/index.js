import './style.scss';
import newGameID from './modules/newGameID';
import saveScore from './modules/saveScore';
import successOrErrorMessage from './modules/succesOrErrorMessage';
import renderScores from './modules/renderScores';

const checkGameID = () => {
  if (window.localStorage.getItem('Game ID')) {
    return JSON.parse(window.localStorage.getItem('Game ID'));
  }
  return newGameID('TiagosGame');
};
const gameID = checkGameID();
console.log(gameID);
const refreshBtn = document.getElementById('refresh');
const userName = document.getElementById('name');
const userScore = document.getElementById('score');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
  const apiReturn = saveScore(userName.value, userScore.value, gameID);
  successOrErrorMessage(apiReturn);
});

refreshBtn.addEventListener('click', () => {
  renderScores();
});

// JSON.parse()
// JSON.stringify()