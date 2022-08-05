import {
  displayID, introSection, boardSection, gameIdSpan,
} from './domElements';

const checkGameID = () => {
  if (!window.localStorage.getItem('Game ID')) {
    boardSection.classList.add('hide');
    displayID.classList.add('hide');
    return '';
  }
  introSection.classList.add('hide');
  const gameID = JSON.parse(window.localStorage.getItem('Game ID'));
  gameIdSpan.innerText = gameID;
  return gameID;
};

export default checkGameID;