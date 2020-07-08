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
  alert('Correct! Lets see if you can get all the questions right.');
  // console.log('Was Marchael born in Seattle? ' + bornCity + ' is correct');
} else {
  alert('Please enter yes or no');
}

var finishCollege = prompt('Did Marchael finish college? yes or no?').toLowerCase();
if(finishCollege === 'y' || finishCollege === 'yes') {
  alert('Correct! Proud alumni of UW! Go Dawgs!');
  // console.log('Did Marchael finish college? ' + finishCollege + ' is correct');
} else if(finishCollege === 'n' || finishCollege === 'no') {
  alert('Incorrect, but sometimes college is not right for everyone.');
  // console.log('Did Marchael finish college? ' + finishCollege + ' is incorrect');
} else {
  alert('Please enter yes or no');
}

var jobAnswer = prompt('Did Marchael work at Din Tai Fung? yes or no?').toLowerCase();
if(jobAnswer === 'y' || jobAnswer === 'yes') {
  alert('Yuuuuuuuuup, serve for four plus years and ate over a thousand dumplings.');
  // console.log('Did Marchael work at Din Tai Fung? ' + jobAnswer + ' is correct');
} else if(jobAnswer === 'n' || jobAnswer === 'no') {
  alert('Noooooooooope, I only worked there for the free dumplings.');
  // console.log('Did Marchael work at Din Tai Fung? ' + jobAnswer + ' is incorrect');
} else {
  alert('Please enter yes or no');
}

var corgiAnswer = prompt('Does Marchael LOVE corgies? yes or no?)').toLowerCase();
if(corgiAnswer === 'y' || corgiAnswer === 'yes') {
  alert('HELL YES I DO! THEY ARE LITTLE LOAFS OF JOY!');
  // console.log('Does Marchael LOVE corgies? ' + corgiAnswer + ' is correct');
} else if(corgiAnswer === 'n' || corgiAnswer === 'no') {
  alert('Do you even know me? Automatic GAME OVER');
  // console.log('Does Marchael LOVE corgies? ' + corgiAnswer + ' is incorrect');
} else {
  alert('Please enter yes or no');
}

//Switching up from if...else statements to a switch statement for my last question.
var numberGoalAnswer = prompt('How many future goals that Marchael have? Ill give you a hint, its between one and six.');

switch(numberGoalAnswer){
case 'six':
  alert('That is right, I am shooting for the stars!');
  break;
  // console.log('How many future goals that Marchael have? ' + umberGoalAnswer + ' correct');
case 'zero':
  alert('Come on, I have little more ambitions than that!');
  break;
  // console.log('How many future goals that Marchael have? ' + umberGoalAnswer + ' is incorrect');
case 'one':
  alert('More than that!');
  break;
  // console.log('How many future goals that Marchael have? ' + umberGoalAnswer + ' is incorrect');
case 'two':
  alert('Keep going up!');
  break;
  // console.log('How many future goals that Marchael have? ' + umberGoalAnswer + ' is incorrect');
case 'three':
  alert('Try multiplying by two!');
  break;
  // console.log('How many future goals that Marchael have? ' + umberGoalAnswer + ' is incorrect');
case 'four':
  alert('Add two more goals!');
  break;
  // console.log('How many future goals that Marchael have? ' + umberGoalAnswer + ' is incorrect');
case 'five':
  alert('Soooooo close!');
  break;
  // console.log('How many future goals that Marchael have? ' + umberGoalAnswer + ' is incorrect');
default:
  alert('Not even close!');
}

alert('Well ' + userName + ' that was fun. Aight, Imma head out, but thanks for entertaining me and hope you have a great day!');