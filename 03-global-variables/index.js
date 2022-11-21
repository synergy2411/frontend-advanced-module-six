// Timers

// setTimeout(() => {
//     console.log("3 Seconds left");
// }, 3000)

// let count = 0;

// setInterval(() => {
//     ++count;
//     console.log(count);
// }, 1000)


// console.log(__dirname);
// console.log(__filename);


// console.log(process.argv);               // <<< tons of properties about the nodejs process



const sum = (n1, n2) => n1 + n2;

const mul = (n1) => n1 * n1;

module.exports = {
    sum,
    mul
}