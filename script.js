'use strict';
function calAge(bithYear) {
  const age = 2023 - bithYear;
  console.log(age);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${bithYear}`;
    console.log(output);

    if (bithYear >= 1982 && bithYear <= 1996) {
      var millenial = true;
      const firstName = 'Sunil';
      output = 'New Function';

      const str = `oh, you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(17, 18));
    }

    console.log(millenial);

    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Sunil Kumar H S';
calAge(1995);

let Name1 = 'Sunil Kumar';
let Name2 = Name1;
Name1 = 'Sunil Kumar H S';
console.log('Name1 -', Name1, ' Name2 -', Name2);

const myName = {
  firstName1: 'Sunil',
  lastName1: 'Kumar',
  list: ['virat', 'ABD'],
};
console.log('Before change : myName - ', myName);

const myNameCopy = Object.assign({}, myName);
myNameCopy.lastName1 = 'Kumar H S';
myNameCopy.list.push('Gayle');
console.log('After the change : ', myNameCopy, '------myName - ', myName);

const myName1 = myName;
myName.lastName1 = 'Kumar H S';
myName1.list.push('Siraj');
console.log('After the change : ', myName1, '------myName - ', myName);
