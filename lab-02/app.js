'use strict';

// What is userName + greeting passing in userName
var userName = prompt('Mihowdy! What is your name?');
alert('Welcome ' + userName + '! I am gonna ask you a series of questions about Marchael Acode. Please use \'yes\' or \'no\' when answering.');

var totalPoints = 0;

//PAIRED PROGRAMMING LAB 04
/*
1. The goal of lab is to wrap each equation inside of a function
- Not defining any parameters/ arguements
- Always call the function after it has been defined
2. Clarify what encompasses a question
3. console.log at least once in each question/function
4. ACP after each question is wrapped around a function
5. Make sure that the call function is OUTSIDE the last curly braces and loops
6. Have fun!
*/

// Five yes or no question series
function bornQuestion() {
  // console.log('new westminister');
  var bornCity = prompt('Was Marchael born in Seattle? yes or no?').toLowerCase();
  if(bornCity === 'y' || bornCity === 'yes') {
    alert('Incorrect, the city resides...TO THE NORTH!');
    // console.log('Was Marchael born in Seattle? ' + bornCity + 'is incorrect');
  } else if(bornCity === 'n' || bornCity === 'no') {
    alert('Correct! Lets see if you can get all the questions right.');
    totalPoints++;
    // console.log('Was Marchael born in Seattle? ' + bornCity + ' is correct');
  } else {
    alert('Please enter yes or no');
  }
}
bornQuestion();

function collegeQuestion() {
  console.log('UW');
  var finishCollege = prompt('Did Marchael finish college? yes or no?').toLowerCase();
  if(finishCollege === 'y' || finishCollege === 'yes') {
    alert('Correct! Proud alumni of UW! Go Dawgs!');
    totalPoints++;
    // console.log('Did Marchael finish college? ' + finishCollege + ' is correct');
  } else if(finishCollege === 'n' || finishCollege === 'no') {
    alert('Incorrect, but sometimes college is not right for everyone.');
    // console.log('Did Marchael finish college? ' + finishCollege + ' is incorrect');
  } else {
    alert('Please enter yes or no');
  }
}
collegeQuestion();

function jobQuestion() {
  console.log('din tai fung');
  var jobAnswer = prompt('Did Marchael work at Din Tai Fung? yes or no?').toLowerCase();
  if(jobAnswer === 'y' || jobAnswer === 'yes') {
    alert('Yuuuuuuuuup, served for four plus years and ate over a thousand dumplings.');
    totalPoints++;
    // console.log('Did Marchael work at Din Tai Fung? ' + jobAnswer + ' is correct');
  } else if(jobAnswer === 'n' || jobAnswer === 'no') {
    alert('Noooooooooope, I only worked there for the free dumplings.');
    // console.log('Did Marchael work at Din Tai Fung? ' + jobAnswer + ' is incorrect');
  } else {
    alert('Please enter yes or no');
  }
}
jobQuestion();
// var corgiAnswer = prompt('Does Marchael LOVE corgies? yes or no?)').toLowerCase();
// if(corgiAnswer === 'y' || corgiAnswer === 'yes') {
//   alert('HELL YES I DO! THEY ARE LITTLE LOAFS OF JOY!');
//   totalPoints++;
//   // console.log('Does Marchael LOVE corgies? ' + corgiAnswer + ' is correct');
// } else if(corgiAnswer === 'n' || corgiAnswer === 'no') {
//   alert('Do you even know me? Automatic GAME OVER');
//   // console.log('Does Marchael LOVE corgies? ' + corgiAnswer + ' is incorrect');
// } else {
//   alert('Please enter yes or no');
// }

// //Switching up from if...else statements to a switch statement for my last question.
// var numberGoalAnswer = prompt('How many future goals does Marchael have? Ill give you a hint, its between one and six.');

// switch(numberGoalAnswer){
// case 'six':
//   alert('That is right, I am shooting for the stars!');
//   totalPoints++;
//   break;
//   // console.log('How many future goals that Marchael have? ' + umberGoalAnswer + ' correct');
// case 'zero':
//   alert('Come on, I have little more ambitions than that!');
//   break;
//   // console.log('How many future goals that Marchael have? ' + umberGoalAnswer + ' is incorrect');
// case 'one':
//   alert('More than that!');
//   break;
//   // console.log('How many future goals that Marchael have? ' + umberGoalAnswer + ' is incorrect');
// case 'two':
//   alert('Keep going up!');
//   break;
//   // console.log('How many future goals that Marchael have? ' + umberGoalAnswer + ' is incorrect');
// case 'three':
//   alert('Try multiplying by two!');
//   break;
//   // console.log('How many future goals that Marchael have? ' + umberGoalAnswer + ' is incorrect');
// case 'four':
//   alert('Add two more goals!');
//   break;
//   // console.log('How many future goals that Marchael have? ' + umberGoalAnswer + ' is incorrect');
// case 'five':
//   alert('Soooooo close!');
//   break;
//   // console.log('How many future goals that Marchael have? ' + umberGoalAnswer + ' is incorrect');
// default:
//   alert('Not even close!');
//   break;
// }
// //Question 6
// var ageArray = ['21', '22', '23', '24', '25', '26', '27']

// for (var i = 0; i < 4; i++){
//   var ageAnswer = prompt('How old is Marchael? I will give you a hint. His age is between 21 and 27.)').toLowerCase();
//   if (ageAnswer === ageArray[5]) {
//     alert('Wow, good guess!');
//     totalPoints++;
//     break;
//   } else if (ageAnswer === ageArray[0] || ageAnswer === ageArray[1] || ageAnswer === ageArray[2] || ageAnswer === ageArray[3] || ageAnswer === ageArray[4]) {
//     alert('Nope, too low. Try again');
//     //prompt('How old is Marchael? I will give you a hint. His age is between 21 and 27.)').toLowerCase();
//   } else {
//     alert('Nope, too high. Try again');
//     //prompt('How old is Marchael? I will give you a hint. His age is between 21 and 27.)').toLowerCase();
//   }
// }

// /*
// //I want to keep this code for future reference of parseInt();
// var ageArray = [21, 22, 23, 24, 25, 26, 27]

// for (var i = 0; i < 6; i++){
//   var ageAnswer = prompt('How old is Marchael? I will give you a hint. His age is between 21 and 27.)')
//   var integer = parseInt(ageAnswer)
//   if (integer === ageArray[5]) {
//     alert('Wow, good guess!');
//     break;
//   } else if (integer === ageArray[0] || integer=== ageArray[1] || integer === ageArray[2] || integer === ageArray[3] || integer === ageArray[4]) {
//     alert('Nope, too low. Try again')
//     //prompt('How old is Marchael? I will give you a hint. His age is between 21 and 27.)').toLowerCase();
//   } else {
//     alert('Nope, too high. Try again')
//     //prompt('How old is Marchael? I will give you a hint. His age is between 21 and 27.)').toLowerCase();
//   }
// }
// */


// //Question 7
// var favAnimeList = ['hunter x hunter', 'my hero academia', 'one piece']

// var notTopThree = ['haikyu', 'demon slayer', 'sword art online']

// for (var i = 0; i < 6; i++) {
//   var favAnime = prompt ('What is one of Marchaels top three favorite animes? Here is the list: Hunter x Hunter, My Hero Academia, One Piece, Haikyu, Demon Slayer or Sword Art Online').toLowerCase();
//   if (favAnime === favAnimeList[0] || favAnime === favAnimeList[1] || favAnime === favAnimeList[2]) {
//     alert('Yup, ' + favAnime + ' is a dope anime!');
//     totalPoints++;
//     break;
//   } else if (favAnime === notTopThree[0] || favAnime === notTopThree[1] || favAnime === notTopThree[2]) {
//     alert('Nope, ' + favAnime + ' is not one of my favorites, but still a great anime.');
//   } else {
//     alert('I made it easy for you and gave you a list of animes to choose from.');
//   }
// }
//   /*
//   I could have used the same method as favAnimeList array, but another method introduced in line 137: 'arrayVariable'.includes('prompt variable')
//   } else if (notTopThree.includes(favAnime)) {
//     alert('Nope, ' + favAnime + ' is not one of my favorites, but still a great anime.');
//   } else {
//     alert('I made it easy for you and gave you a list of animes to choose from.');
//   }
//   */

// //Final sign-off alert to user
// alert('Well ' + userName + ' that was fun. Your total score was ' + totalPoints + '/7. Aight, Imma head out, but thanks for entertaining me and hope you have a great day!');
