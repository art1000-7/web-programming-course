// C2. Spread with Objects
const baseUser = { name: "Aida", role: "student" };
const extra = { group: "SE-101", active: true };

const userProfile = { ...baseUser, ...extra };
console.log('User Profile:', userProfile);

const promotedUser = { ...userProfile, role: "class_rep" };
console.log('Promoted User:', promotedUser);