console.clear();

/*
Let's calculate some interesting facts based on a user's age! 
The program expects the user to provide their age as a numerical input. 
The code for receiving this input is provided below.

Calculate the following:
1. The total number of days the person has lived.
2. The estimated number of remaining days, assuming an average life span of 80 years.
3. The percentage of life already lived, in relation to the expected life span.
4. The cumulative number of days the person has spent sleeping, assuming an average of 8 hours of sleep per day.

Log each result with a clear and descriptive message. 
Hint: You can combine text and variables using the `+` operator.

💡 For simplicity, ignore leap years.
*/

const currentAge = Number(process.argv[2]); // This takes the `<age>` entered in the command `node index.js <age>`.
const lifeDays = currentAge * 365;
const remainingDays = (80 - currentAge) * 365;
const percLife = (currentAge / 80) * 100;
const sleepDays = lifeDays / 3;

console.log("Your current age is: " + currentAge);
console.log("You've been alive for " + lifeDays + " days");
console.log("You have an estimated " + remainingDays + " days left to live");
console.log("You've spend an estimated " + percLife + "% of your lifetime");
console.log("You've been asleep for about " + sleepDays + " days");
