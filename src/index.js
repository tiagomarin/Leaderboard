import './style.scss';
import newGameID from './modules/newGameID';
import saveScore from './modules/saveScore';
import successOrErrorMessage from './modules/succesOrErrorMessage';
import getScores from './modules/getScores';
import renderScores from './modules/renderScores';

const checkGameID = () => {
  if (window.localStorage.getItem('Game ID')) {
    return JSON.parse(window.localStorage.getItem('Game ID'));
  }
  return newGameID('TiagosGame');
}
const gameID = checkGameID();
const refreshBtn = document.getElementById('refresh');
const userName = document.getElementById('name');
const userScore = document.getElementById('score');
// userName.addEventListener('change', (e) => {
//   console.log(userName.value);
// })
// userScore.addEventListener('change', (e) => {
//   console.log(userScore.value);
// })
userScore

const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', (e) => {
  const apiReturn = saveScore(userName.value, userScore.value, gameID);
  // alert(successOrErrorMessage(apiReturn)); how can I do this?
})

refreshBtn.addEventListener('click', () => {
  renderScores();
})

// JSON.parse()
// JSON.stringify()