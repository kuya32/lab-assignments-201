'use strict';

// What is userName + greeting passing in userName
var userName = prompt('Mihowdy! What is your name?');
alert('Welcome ' + userName + '! I am gonna ask you a series of questions about Marchael Acode. Please use \'yes\' or \'no\' when answering.');

// Five yes or no question series
var bornCity = prompt('Was Marchael born in Seattle? yes or no?').toLowerCase();
if(bornCity === 'y' || bornCity === 'yes') {
  alert('Incorrect, the city resides...TO THE NORTH!');
  // console.log('Was Marchael born in Seattle? ' + bornCity + 'is incorrect');
} else if(bornCity === 'n' || bornCity === 'no') {
  alert('Nope...try again.');
  // console.log('Was Marchael born in Seattle? ' + bornCity + ' is correct');
} else {
  alert('Please enter yes or no');
}

/*var finishCollege = prompt('Did Marchael finish college? yes or no?').toLowerCase();
if(doDance === 'y' || doDance === 'yes') {
  alert('I sure do! I swing, blues and fusion dance!');
  // console.log('Does Tif social dance? ' + doDance + ' is correct');
} else if(doDance === 'n' || doDance === 'no') {
  alert('Incorrect - It may not seem like it on Zoom but I got mooooves!');
  // console.log('Does Tif social dance? ' + doDance + ' is incorrect');
} else {
  alert('Please enter yes or no');
}

/*var philoDegree = prompt('Does Tif have a degree in Philosophy? (yes or no)').toLowerCase();
if(philoDegree === 'y' || philoDegree === 'yes') {
  alert('Yeah...I am in a constant state of existentialism, LOL');
  // console.log('Does Tif have a degree in Philosophy? ' + philoDegree + ' is correct');
} else if(philoDegree === 'n' || philoDegree === 'no') {
  alert('Sadly, you\'re wrong. I majored in Philosophy of the Mind');
  // console.log('Does Tif have a degree in Philosophy? ' + philoDegree + ' is incorrect');
} else {
  alert('Please enter yes or no');
}

var ownCat = prompt('Does Tif own a cat? (yes or no)').toLowerCase();
if(ownCat === 'y' || ownCat === 'yes') {
  alert('Heck no fren! Doggos only plz.');
  // console.log('Does Tif own a cat? ' + ownCat + ' is incorrect');
} else if(ownCat === 'n' || ownCat === 'no') {
  alert('Doin me an excite friendo! Cats are lame');
  // console.log('Does Tif own a cat? ' + ownCat + ' is correct');
} else {
  alert('Please enter yes or no');
}

var publishBook = prompt('Does Tif want to write and publish a book? (yes or no)').toLowerCase();
if(publishBook === 'y' || publishBook === 'yes') {
  alert('Correct! I do, but it\'s time consuming!');
  // console.log('Does Tif want to write and publish a book? ' + publishBook + ' is correct');
} else if(publishBook === 'n' || publishBook === 'no') {
  alert('Incorrect, my friend. I aspire to be remembered forever!');
  // console.log('Does Tif want to write and publish a book? ' + publishBook + ' is incorrect');
} else {
  alert('Please enter yes or no');
}

alert('Thanks for taking the time to try and get to know me, ' + userName + ':)');


var gingerAgeAnswer = prompt('How old is she?');

switch(gingerAgeAnswer){
case 'two':
  alert('yeppers!');
  break;
case 'zero':
  alert('shes definitely older');
  break;
case 'one':
  alert('almost there');
  break;
case 'three':
  alert('almost there');
  break;
default:
  alert('not even in the ballpark');