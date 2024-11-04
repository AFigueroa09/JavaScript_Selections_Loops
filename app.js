console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let count = 0;
for(var i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        count++;
    }
}
console.log("Ammount of ODDS: ", count);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(var i = 1; i <= 100; i++) {
    let result = "";
    let divisableByThree = false;
    let divisableByFive = false;
    if (i % 3 == 0) {
        // Divisable by 3
        result += "FIZZ";
        divisableByThree = true;
    }

    if (i % 5 == 0) {
        // Divisable by 3
        result += "BUZZ";
        divisableByFive = true;
    }

    if (divisableByThree == false && divisableByFive == false) {
        result = i;
    }

    console.log(result);
}
