const successOrErrorMessage = (str) => {
  if (str.result === "Leaderboard score created correctly.") {
    return "scores successfully added"
  } else {
    return "sorry, scores not added, please try again"
  }
}
export default successOrErrorMessage