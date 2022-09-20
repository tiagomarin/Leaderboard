import { displayID, introSection, boardSection } from './domElements';
import medalbg1 from '../assets/medalbg1.png';
import medalbg2 from '../assets/medalbg2.png';
import medalbg3 from '../assets/medalbg3.png';

const renderScores = () => {
  introSection.classList.add('hide');
  boardSection.classList.remove('hide');
  displayID.classList.remove('hide');
  const scores = JSON.parse(window.localStorage.getItem('scoresDatabase')) || [];
  const scoresPlaceholder = document.getElementById('scores-placeholder');
  while (scoresPlaceholder.firstChild) {
    scoresPlaceholder.removeChild(scoresPlaceholder.firstChild);
  }

  // 1st place
  if (scores.length > 0) {
    const wrap = document.createElement('div');
    const wrap2 = document.createElement('div');
    const position = document.createElement('img');
    position.classList = 'position';
    position.src = medalbg1;
    const name = document.createElement('span');
    name.classList = 'player';
    name.innerText = `${scores[0].user}`;
    const score = document.createElement('span');
    score.classList = 'score';
    score.innerText = `${scores[0].score}`;
    scoresPlaceholder.appendChild(wrap);
    wrap.appendChild(wrap2);
    wrap2.appendChild(position);
    wrap2.appendChild(name);
    wrap.appendChild(score);
  }
  // 2nd place
  if (scores.length > 1) {
    const wrap = document.createElement('div');
    const wrap2 = document.createElement('div');
    const position = document.createElement('img');
    position.classList = 'position';
    position.src = medalbg2;
    const name = document.createElement('span');
    name.classList = 'player';
    name.innerText = `${scores[1].user}`;
    const score = document.createElement('span');
    score.classList = 'score';
    score.innerText = `${scores[1].score}`;
    scoresPlaceholder.appendChild(wrap);
    wrap.appendChild(wrap2);
    wrap2.appendChild(position);
    wrap2.appendChild(name);
    wrap.appendChild(score);
  }
  // 3rd place
  if (scores.length > 1) {
    const wrap = document.createElement('div');
    const wrap2 = document.createElement('div');
    const position = document.createElement('img');
    position.classList = 'position';
    position.src = medalbg3;
    const name = document.createElement('span');
    name.classList = 'player';
    name.innerText = `${scores[2].user}`;
    const score = document.createElement('span');
    score.classList = 'score';
    score.innerText = `${scores[2].score}`;
    scoresPlaceholder.appendChild(wrap);
    wrap.appendChild(wrap2);
    wrap2.appendChild(position);
    wrap2.appendChild(name);
    wrap.appendChild(score);
  }

  if (scores.length > 2) {
    for (let i = 3; i < scores.length; i += 1) {
      const wrap = document.createElement('div');
      const wrap2 = document.createElement('div');
      const position = document.createElement('span');
      position.classList = 'position';
      position.innerText = i + 1;
      const name = document.createElement('span');
      name.classList = 'player';
      name.innerText = `${scores[i].user}`;
      const score = document.createElement('span');
      score.classList = 'score';
      score.innerText = `${scores[i].score}`;
      scoresPlaceholder.appendChild(wrap);
      wrap.appendChild(wrap2);
      wrap2.appendChild(position);
      wrap2.appendChild(name);
      wrap.appendChild(score);
    }
  }
};

export default renderScores;
