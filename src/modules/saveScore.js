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
    return response.text;
  } catch (error) {
    console.log(error);
  }
  return saveScore;
};
export default saveScore;
