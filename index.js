// Write your solution in this file!
// Declare a variable in global scope called customerName using the var keyword:
var customerName = "bob";

// Write a function that access the global customerName variable and uppercase it:
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Write a function that when called, declares a variable called bestCustomer in
// global scope and assigns it to be 'not bob' 

var bestCustomer;

function setBestCustomer(){
   bestCustomer = 'not bob';
}

// Change bestCustomer variable

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}

// Declare a constant in global scope called
// leastFavoriteCustomer. Assign it an initial value.
// Then write a function called changeLeastFavoriteCustomer()
// that attempts to change that constant

const leastFavoriteCustomer = 'definitely bob'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'perhaps bob';
}




