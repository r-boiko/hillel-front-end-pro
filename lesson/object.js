let users = [
  {
    name: 'Alex',
    age: 21,
    job: 'Driver',
    skills: ['attention'],
  },
  {
    name: 'Bob',
    age: 18,
    job: 'Html coder',
    skills: ['js', 'css', 'html'],
  },
  {
    name: 'Pavel',
    age: 20,
    job: 'Chief',
    skills: ['cooking'],
  }
];

let filteredUsers = users.filter(function (currentUser) {
  console.log(currentUser.skills.length, 'curUser')

  return currentUser.age < 21;
})
console.log(filteredUsers)
