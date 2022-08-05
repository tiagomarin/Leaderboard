const newGameID = async (str) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    method: 'POST',
    body: JSON.stringify(
      {
        name: str,
      },
    ),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (response.ok) {
    const json = await response.json();
    window.localStorage.setItem('Game ID', JSON.stringify(json.result.split(' ')[3]));
    return json.result.split(' ')[3];
  }
  return response;
};

export default newGameID;