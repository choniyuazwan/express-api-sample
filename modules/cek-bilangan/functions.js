function ganjil(input) {
  return ((input % 2) > 0);
}

function prima(input) {
  let status = true;

  for (let i = 2; i < input; i++) {
    if (input%i === 0) status = false;
  }

  return status;
}

export { ganjil, prima };
