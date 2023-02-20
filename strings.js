function capitalize(testString) {
  const splitRegex = new RegExp('\[^a-zA-Z0-9]$');

  const result = testString.split('').reduce((accum, currentChar) =>
    accum.match(splitRegex)
      ? accum + currentChar.toUpperCase()
      : accum + currentChar, " ").trimStart();

  document.getElementById('capitalize-label').innerHTML = result;
}

function truncate(text, size) {
  const result = text.length <= size
    ? text
    : text.substring(0, size - 3) + '...'

  document.getElementById('truncate-label').innerHTML = result;
}