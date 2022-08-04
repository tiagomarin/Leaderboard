import newGameID from './newGameID';

const checkGameID = () => {
  if (window.localStorage.getItem('Game ID')) {
    return JSON.parse(window.localStorage.getItem('Game ID'));
  }
  return newGameID('TiagosGame');
};

export default checkGameID;