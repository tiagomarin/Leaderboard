const checkInputName = (name) => {
  const noSpaces = (str) => str.replace(/\s/g, '').length < 3;
  if (name === '') {
    return "name field can't be empty";
  } if (name.length < 3) {
    return 'name field should be at least 3 characters long';
  } if (noSpaces(name) === true) {
    return 'please put at least 3 characters disregarding empty spaces';
  } if (name.length > 15) {
    return 'name field accepts max 15 characters';
  }
  return true;
};
const checkInputScore = (score) => {
  const isNum = /^[0-9]+$/;
  if (score === '') {
    return 'score cannot be empty';
  } if (!isNum.test(score)) {
    return 'score field only accepts a number with no spaces';
  } if (score.length > 6) {
    return 'name field accepts max 6 characters';
  }
  return true;
};
export { checkInputName, checkInputScore };
