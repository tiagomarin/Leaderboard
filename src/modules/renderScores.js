const renderScores = () => {
  const scores = JSON.parse(window.localStorage.getItem('scoresDatabase'));
  const scoresPlaceholder = document.getElementById('scores-placeholder')

  for (let i = 0; i < scores.length; i += 1) {
    let td = document.createElement('td');
    td.innerText = `${scores[i].user}: ${scores[i].score}`
    scoresPlaceholder.appendChild(td);
  }
}

export default renderScores
