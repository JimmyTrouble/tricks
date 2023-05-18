const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};

for (let i = 0; i < possibleIterable.length; i++) {
  if (possibleIterable[i] % 3 === 0) {
    divByThree[possibleIterable[i]] = i;
  }
}

console.log(divByThree);


const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  
  const newUser = { id: 4, name: 'David' };
  const diffObj = {date: '1/2/23'};
  users.push(newUser);
  users.unshift(diffObj);
  
  console.log(users);
  


