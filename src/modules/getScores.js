import renderScores from './renderScores';

const getScores = async (gameid) => {
  try {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameid}/scores/`);
    let data = await response.json();
    data = data.result;
    data.sort((a, b) => b.score - a.score);
    window.localStorage.setItem('scoresDatabase', JSON.stringify(data));
    renderScores();
    return data;
  } catch (error) {
    return error;
  }
};

export default getScores;
