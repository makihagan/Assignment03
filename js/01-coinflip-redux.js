let coinFlip;
let numPick = parseInt(prompt('Enter a number'));
for (let i = 0; i < numPick; i++) {
    let rundomNum = Math.round(Math.random());
    coinFlip = rundomNum;
    if (coinFlip <= 0) {
        console.log('Heads');
    } else {
        console.log('Tails');
    }
}