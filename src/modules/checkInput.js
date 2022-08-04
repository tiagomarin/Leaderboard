const checkInputName = (name) => {
  const noSpaces = (str) => {
    return str.replace(/\s/g, '').length < 3
  }
  if (name === "") {
    return "name field can't be empty";
  } else if (name.length < 3) {
    return "name field should be at least 3 characters long";
  } else if (noSpaces(name) === true) {
    return "please put at least 3 characters disregarding empty spaces";
  } else if (name.length > 15) {
    return "name field accepts max 15 characters";
  } else {
    return true;
  }
}
const checkInputScore = (score) => {
  const isNum = /^[0-9]+$/
  if (score === "") {
    return "score cannot be empty";
  } else if (!isNum.test(score)) {
    return "score field only accepts a number with no spaces";
  } else if (score.length > 6) {
    return "name field accepts max 6 characters";
  } else {
    return true;
  }
}
export { checkInputName, checkInputScore };

