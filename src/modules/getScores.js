const getScores = async (gameid) => {
  try {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameid}/scores/`);

    let data = await response.json()
    data = data.result
    console.log("data from api", data)
    data.sort((a, b) => b.score - a.score);
    console.log("sorted: ", data)
    window.localStorage.setItem('scoresDatabase', JSON.stringify(data))
  }
  catch (error) {
    console.log(error)
  }
}

export default getScores
