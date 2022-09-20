import { newEntryStatus, userName, userScore } from './domElements';

const successOrErrorMessage = (str) => {
  if (str === 'Leaderboard score created correctly.') {
    userName.value = '';
    userScore.value = '';
    newEntryStatus.innerText = 'Score added successfully.';
  } else {
    newEntryStatus.innerText = 'Score not added, please try again.';
  }
};
export default successOrErrorMessage;