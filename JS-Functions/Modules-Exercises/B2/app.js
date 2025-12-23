// app.js
import createUser from './user.js';

const user1 = createUser('Alice', 'student');
const user2 = createUser('Bob', 'teacher');
const user3 = createUser('Charlie', 'admin');

console.log(user1);
console.log(user2);
console.log(user3);