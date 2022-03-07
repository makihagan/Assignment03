// GLOBAL VARIABLES
let miles;
let gallons;
let mpg;
let again = 'y';

do {
    miles = parseFloat(prompt('Enter miles driven'));
    gallons = parseFloat(prompt('Enter number of gallons'));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`);
    } else {
        alert('One or both of your entries are invalid.');
    }
    do {
        again = prompt('Do you want to run the application again? (y or n)');
    } while (again != 'y' && again != 'n') ;  
} while (again === 'y');
console.log('The application has exited.');

// this is DO WHILE LOOP
// this will run in loop as long as again is y

// first I tried || (or logical operator) instead of &&
// because if I think in a sentence
// "do while again is not y OR again is not n"
// sounds right... But it didn't work, so I researched
// and I found out that && would work in this case.

// this means, it will be true only when both conditions are met.

// if again='y' then first condition is false and second condition is true.
// overall result is false and leave the loop
// if again='n' then first condition is true and second condition is false. 
// overall result is false and leave the loop
// if again is something else, then both conditions are true
// and the loop is repeated...

// Phew! It was tricky, but I learned a good thing!
