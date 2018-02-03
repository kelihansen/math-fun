'use strict';

/*
    For each Problem:

    Test your function by hand in the browser's console to get it working.
    When you think it is finished, uncomment the call
    for its test function to see if it passes.

    Once you get the test passing, do an a-c-p cycle and synchronize the
    code between GitHub and your laptop. Don't forget to create
    a new branch for your work on the next question!
*/


/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)

Write a function called sum() that takes in two numbers as
arguments and then returns an array where the first element
is the sum of those numbers, and the second element is a concatenated
string that EXACTLY follows this example and uses
the values that were input into the function:

"The sum of 4 and 7 is 11."
*/

// Write your code here
function sum(num,num2){ //eslint-disable-line
    const numSum = num + num2;
    return [numSum, 'The sum of ' + num + ' and ' + num2 + ' is ' + numSum + '.'];
}

// Here is the test for sum(); uncomment it to run it
testSum();




/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers
as arguments and returns an array where the first element is the
product of those numbers, and the second element is a string
that EXACTLY follows this example and uses the values that
were input into the function:

"The product of 5 and 9 is 45."
*/

// Write your code here
function multiply(a,b){ //eslint-disable-line
    const product = a * b;
    return [product, 'The product of ' + a + ' and ' + b + ' is ' + product + '.'];
}

// Here is the test for multiply(); uncomment it to run it
testMultiply();


/////////////////////////////////////
/* Problem 3

Write a function called sumAndMultiply() that takes in three
numbers as separate arguments and returns an array where the
first element is the sum of those three numbers, the second
element is the product of those three numbers,  and the third
and fourth elements are strings that EXACTLY follow this example
and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL! IMPORTANT DETAIL! IMPORTANT DETAIL!

    You may not use the arithmetic
    operators + and * in this function. To do addition,
    use your sum() function, and to do multiplication,
    use your multiply() function.

IMPORTANT DETAIL! IMPORTANT DETAIL! IMPORTANT DETAIL!
*/

// Write your code here
function sumAndMultiply(a,b,c){ //eslint-disable-line
    const initialSum = sum(a,b)[0];
    const finalSum = sum(initialSum,c)[0];
    const initialProduct = multiply(a,b)[0];
    const finalProduct = multiply(initialProduct,c)[0];
    return [finalSum, finalProduct, a + ' and ' + b + ' and ' + c + ' sum to ' + finalSum + '.', 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + finalProduct + '.'];
}

// function sumAndMultiply(a,b,c){ //eslint-disable-line
//     let runningSum = sum(a,b)[0];
//     runningSum = sum(runningSum,c)[0];
//     let runningProduct = multiply(a,b)[0];
//     runningProduct = multiply(runningProduct,c)[0];
//     return [runningSum, runningProduct, a + ' and ' + b + ' and ' + c + ' sum to ' + runningSum + '.', 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + runningProduct + '.'];
// }

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);


/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of
numbers as its single argument and then returns an array where
the first element is the sum of the numbers in the array, and
the second element is a string that EXACTLY follows this example
and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL! IMPORTANT DETAIL! IMPORTANT DETAIL!

    You may not use the arithmetic
    operators + and * in this function. To do addition,
    use your sum() function, and to do multiplication,
    use your multiply() function.

IMPORTANT DETAIL! IMPORTANT DETAIL! IMPORTANT DETAIL!
*/

// Write your code here

function sumArray(testArray){ //eslint-disable-line
    let gradualSum = 0;
    for (let i = 0; i < testArray.length; i++) {
        gradualSum = sum(gradualSum,testArray[i])[0];
    }
    return [gradualSum, testArray + ' was passed in as an array of numbers, and ' + gradualSum + ' is their sum.'];
}

// Here is the test for sumArray(); uncomment it to run it
testSumArray();


/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers
as its argument and returns an array whose first element
is the product of those numbers, and the second element is
a string that EXACTLY follows this example and uses the values
that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this
function. To do multiplication, use your multiply() function that
you've already created. You're going to have to be resourceful to
figure out how to do this.

Test this function by hand in the console to get it working, and
when you think it is finished, uncomment the call for the
testMultiplyArray() function and see if the test passes.

Once you get the test passing, do an a-c-p cycle and synchronize the
code between GitHub and your laptop. Don't forget to create a
new branch for your work on the next question!
*/

// Write your code here

function multiplyArray(testArray){ //eslint-disable-line
    let gradualProduct = 1;
    for (let i = 0; i < testArray.length; i++) {
        gradualProduct = multiply(gradualProduct,testArray[i])[0];
    }
    return [gradualProduct, 'The numbers ' + testArray + ' have a product of ' + gradualProduct + '.'];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray();