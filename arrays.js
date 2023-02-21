function filterRange(stringArray, firstNumber, secondNumber) {
  const array = stringArray.split(',');

  const result = array.filter((item) => {
    if (item >= firstNumber && item <= secondNumber)
      return item;
  })

  document.getElementById('filter-label').innerHTML = result;
}

function sortArr(stringArray) {
  const array = stringArray.split(',');

  const result = array.sort((firstItem, secondItem) => firstItem - secondItem)

  document.getElementById('sort-label').innerHTML = result;
}

function sortLengthArr(stringArray) {
  const array = stringArray.split(',');

  const result = array.sort((firstItem, secondItem) => firstItem.length - secondItem.length)

  document.getElementById('sort-length-label').innerHTML = result;
}

function averageAge(jsonString) {
  const newJson = jsonString.replace(/([a-zA-Z0-9]+?):/g, '"$1":');
  const parseJson = JSON.parse(newJson);
  const array = eval(parseJson);

  let count = 0;
  const averageAge = array.reduce((accum, item) => {
    if (item.age > 17 && item.age < 55) {
      accum += item.age;
      count++;
    }

    return accum;
  }, 0) / count;

  document.getElementById('average-age-label').innerHTML = averageAge;
}

function sortUsers(jsonString) {
  const newJson = jsonString.replace(/([a-zA-Z0-9]+?):/g, '"$1":');
  const parseJson = JSON.parse(newJson);
  const array = eval(parseJson);

  const sortArray = array.sort((firstItem, secondItem) => (firstItem.name.localeCompare(secondItem.name)))
    .sort((firstItem, secondItem) => (firstItem.name === secondItem.name) && (firstItem.age - secondItem.age))

  const result = '[' + sortArray.map((item) => {
    return `<br>    { name: "${item.name}", age: ${item.age} }`
  }).toString() + '<br>];';

  document.getElementById('sort-user-label').innerHTML = result;
}

function minMaxAge(jsonString) {
  const newJson = jsonString.replace(/([a-zA-Z0-9]+?):/g, '"$1":');
  const parseJson = JSON.parse(newJson);
  const array = eval(parseJson);

  const result = array.reduce((accum, item) => {
    accum.min = item.age < accum.min ? item.age : accum.min;
    accum.max = item.age > accum.max ? item.age : accum.max;

    return accum;
  }, { min: 200, max: 0 });

  document.getElementById('min-max-age-label').innerHTML = `{min:${result.min}, max:${result.max}}`;
}

function unique(stringArray) {
  const array = stringArray.split(',').map(item => item.trim());

  const uniqueArray = [];

  array.forEach((item) => {
    if (!uniqueArray.some(uniqueItem => item === uniqueItem))
      uniqueArray.push(item);
  })

  document.getElementById('unique-label').innerHTML = uniqueArray;
}