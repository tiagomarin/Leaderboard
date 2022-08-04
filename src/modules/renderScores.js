import { displayID, introSection, boardSection } from './domElements';

const renderScores = () => {
  introSection.classList.add("hide");
  boardSection.classList.remove("hide");
  displayID.classList.remove("hide");
  const scores = JSON.parse(window.localStorage.getItem('scoresDatabase'));
  const scoresPlaceholder = document.getElementById('scores-placeholder');
  while (scoresPlaceholder.firstChild) {
    scoresPlaceholder.removeChild(scoresPlaceholder.firstChild);
  }

  for (let i = 0; i < scores.length; i += 1) {
    const wrap = document.createElement('div');
    const wrap2 = document.createElement('div');
    // if (i < 3) {
    //   let position = document.createElement('img');
    //   position.classList = "position"
    //   position.src = `../assets/icons/00${i + 1}-medalbg.png`;
    // }
    let position = document.createElement('span');
    position.classList = "position"
    position.innerText = i + 1;
    const name = document.createElement('span');
    name.classList = "player"
    name.innerText = `${scores[i].user}`
    const score = document.createElement('span');
    score.classList = "score";
    score.innerText = `${scores[i].score}`;
    scoresPlaceholder.appendChild(wrap);
    wrap.appendChild(wrap2);
    wrap2.appendChild(position);
    wrap2.appendChild(name);
    wrap.appendChild(score);
  }
};

export default renderScores;
