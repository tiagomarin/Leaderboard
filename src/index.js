import './style.scss';
import saveScore from './modules/saveScore';
import successOrErrorMessage from './modules/succesOrErrorMessage';
import renderScores from './modules/renderScores';
import checkGameID from './modules/checkGameID';

const newGame = document.getElementById('new-game');
const userGameID = document.getElementById('game-id-user');

newGame.addEventListener('click', () => {
  window.localStorage.setItem('Game ID', JSON.stringify(userGameID.value));
  renderScores()
});

const gameID = checkGameID();
const refreshBtn = document.getElementById('refresh');
const userName = document.getElementById('name');
const userScore = document.getElementById('score');
const submitBtn = document.getElementById('submit-btn');
const displayID = document.getElementById('game-id');
displayID.innerText = gameID;



submitBtn.addEventListener('click', () => {
  const apiReturn = saveScore(userName.value, userScore.value, gameID);
  successOrErrorMessage(apiReturn);
});

refreshBtn.addEventListener('click', () => {
  renderScores();
});

renderScores();