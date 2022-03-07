// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
do {
    investment = parseFloat(prompt('Enter investment amout as xxxx.xx'));
    // console.log(typeof investment);
} while (isNaN(investment) == true);
do {
    rate = parseFloat(prompt('Enter interest rate as xx.x'));
} while ((isNaN(rate) == true) || rate < 0);
do {
    years = parseInt(prompt('Enter number of years'), 10);
} while ((isNaN(years) == true) || years < 1 || years > 30);

// PERFORM CALCULATIONS
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULTS
document.write(`Original investment amount: ${investment}<br>`);
document.write(`Interest rate: ${rate}<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Investment future value: ${futureValue.toFixed(2)}`);

// I had to play around with this one...
// First I tried == NaN, but it didn't work.
// Then I tried to use typeof investment != 'number'
// but it didn't work so I tried to see what type is if NaN is entered
// then for some reason it came back as number even if alphabet characters
// I thought maybe it's something to do with parseInt/parseFloat...?
// Finally I used isNaN function with Boolean
// then it finally worked though it was tricky...
// I had to use () if I want to use logical operators

