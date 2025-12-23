// C7. Immutable Updates with Spread (Arrays)
const groups = ["SE-101", "SE-102"];

const groupsWithEnd = [...groups, "SE-103"];
const groupsWithStart = ["SE-001", ...groups];

console.log('Original groups:', groups);
console.log('With SE-103 at end:', groupsWithEnd);
console.log('With SE-001 at start:', groupsWithStart);
console.log('Original unchanged:', groups.length === 2);