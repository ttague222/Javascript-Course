/***********************
Variables and Data Types



var firstName = 'Tom';
console.log(firstName);

var lastName = 'Tague';
var age = 27;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//varible naming rules
var _3years = 3;
var johnMark = 'John and Mark'
*/

/***********************
Variable mutation and type correction
*/
/*
var firstName = 'John';
var age = 28;


console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
*/

/*************
BMI Challenge
*/

var markMass;
var markHeight;
var johnMass;
var johnHeight;
var markBMI;
var johnBMI;


var markMass = prompt('What is Mark\'s mass?');
var markHeight = prompt('What is Mark\'s height?');

var johnMass = prompt('What is the mass of John?');
var johnHeight = prompt('What is the height of John?');

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

console.log(markBMI, johnBMI);

var markHigherBMI = markBMI > johnBMI;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

















