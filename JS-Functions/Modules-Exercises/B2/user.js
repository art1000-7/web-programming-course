// user.js
let idCounter = 1;

export default function createUser(name, role) {
  return {
    id: idCounter++,
    name,
    role
  };
}