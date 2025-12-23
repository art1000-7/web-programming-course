// C4. Rest in Array Destructuring
const marks = [98, 87, 76, 65, 54];

const [top1, top2, ...others] = marks;

console.log(`Top students: ${top1}, ${top2}. Others: ${others}.`);