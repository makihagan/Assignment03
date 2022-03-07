let coinFlip;
do {
    let rundomNum = Math.round(Math.random());
    coinFlip = rundomNum;
    if (coinFlip <= 0) {
        console.log('Heads');
    } else {
        console.log('Tails');
    }
} while (coinFlip <= 0);

// while coinFlip <= 0 means do while coinFlip is Heads
// means it will stop when it gets Tails
