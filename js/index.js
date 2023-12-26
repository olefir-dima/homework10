function runHW() {
  const inputNumb = prompt("Enter number:");
  if (!validateInput(inputNumb, false)) {
    return;
  }
  const inputDegree = prompt("Enter degree:");
  if (!validateInput(inputDegree, true)) {
    return;
  }

  alert("Result: " + pow(+inputNumb, +inputDegree));
}

function validateInput(input, isInt) {
  if (input === null) {
    alert("As you wish");
  } else if (!input.trim() || isNaN(input)) {
    alert("Invalid number");
  } else {
    if (isInt) {
      if (Number.isInteger(+input)) return true;
      else {
        alert("The degree must be an integer");
        return false;
      }
    } else {
      return true;
    }
  }
  return false;
}

function pow(num, degree) {
  if (degree === 0) {
    return 1;
  }

  if (degree < 0) return 1 / pow(num, -degree);
  else return num * pow(num, degree - 1);
}
