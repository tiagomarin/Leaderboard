import getScores from './getScores';

const saveScore = async (name, score, gameID) => {
  try {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    getScores(gameID);
    const message = await response.json();
    return message.result;
  } catch (error) {
    return error;
  }
};
export default saveScore;
