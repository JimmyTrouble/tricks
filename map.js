const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  
  const userIds = users.map((user) => {
    return user.id;
  });
  
  console.log(userIds); // Output: [1, 2, 3]
  

  const numbers = [1, 2, 3, 4, 5];

  const doubledNumbers = numbers.map((number) => {
    return number * 2;
  });
  
  console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
  