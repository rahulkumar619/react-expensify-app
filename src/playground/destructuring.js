console.log('hi, i am Rahul');
const items = ['Coffee (hot)', '$20', '$30', '$40'];

const [drink, , medium] = items;

console.log(`A medium ${drink} will cost you ${medium}`);