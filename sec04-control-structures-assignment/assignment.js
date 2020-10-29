const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
if (randomNumber > 0.7) {
    alert (' Number greater than 0.7 ')
   };
   
// task 2
let randArray = [11, 5, 6, 7, 14, 5];
for (let i=0; i< randArray.length; i++) {
    console.log(randArray[i]);
    }

for (const randOutput of randArray) {
    console.log(randOutput);
    }


//task 3
for (let i= randArray.length - 1; i>=0; i--) {
    console.log(randArray[i]);
    }


// task 4
let newList = Math.random();
if (randomNumber > 0.7 && newList > 0.7 ||
    randomNumber < 0.2 || newList < 0.2 ) {
    alert (' Both are greater than 0.7 or atleast one is greater than 0.2  ')
};

