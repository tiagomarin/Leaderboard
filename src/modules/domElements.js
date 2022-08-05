const newGameBtn = document.getElementById('new-game');
const newGameName = document.getElementById('game-name-user');
const oldGameBtn = document.getElementById('old-game');
const oldGameID = document.getElementById('game-id-user');
const refreshBtn = document.getElementById('refresh');
const userName = document.getElementById('name');
const userScore = document.getElementById('score');
const addScoreBtn = document.getElementById('submit-btn');
const displayID = document.getElementById('display-ID');
const gameIdSpan = document.getElementById('game-id');
const introSection = document.getElementById('intro');
const boardSection = document.getElementById('wrap');
const startNewGameD = document.getElementById('start-new-game-desktop');
const startNewGameM = document.getElementById('start-new-game-mobile');
const smallNameError = document.getElementById('error-name');
const smallScoreError = document.getElementById('error-score');

export {
  newGameBtn, newGameName, oldGameBtn, oldGameID, refreshBtn, userName, userScore,
  addScoreBtn, displayID, gameIdSpan, introSection, boardSection, startNewGameD,
  startNewGameM, smallNameError, smallScoreError,
};