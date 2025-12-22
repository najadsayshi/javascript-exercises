const add = function(num1,num2) {
  return num1+num2;
	
};

const subtract = function(num1,num2) {
  return num1,-num2;
	
};

const sum = function(array) {
  return array.reduce((accum,ele)=>  accum+ele);
	
};

const multiply = function() {
  return array.reduce((accum,ele)=>  accum*ele);


};

const power = function(num1,num2) {
  return num1**num2;
	
};

const factorial = function(num1) {
  let i =0;
  let current = 1;
  while (i!=num1){
    current *= i;
    
  }
  return current;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
