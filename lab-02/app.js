'use strict';

var userName = prompt('Mihowdy! What is your name?');

alert('Welcome ' + userName + '! I am gonna ask you a series of questions about myself, Marchael Acode. Please use \'yes\' or \'no\' when answering.');

var totalPoints = 0;


function bornQuestion() {

  var bornCity = prompt('Was I born in Seattle? yes or no?').toLowerCase();

  if(bornCity === 'y' || bornCity === 'yes') {
    alert('Incorrect, the city resides...TO THE NORTH!');
  } else if(bornCity === 'n' || bornCity === 'no') {
    alert('Correct! I was born in Canada. Lets see if you can get all the questions right. One down, six to go!');
    totalPoints++;
  } else {
    alert('Please enter yes or no');
  };

};
bornQuestion();


function collegeQuestion() {

  var finishCollege = prompt('Did I finish college? yes or no?').toLowerCase();

  if(finishCollege === 'y' || finishCollege === 'yes') {
    alert('Correct! Proud alumni of UW! Go Dawgs!');
    totalPoints++;
  } else if(finishCollege === 'n' || finishCollege === 'no') {
    alert('Incorrect, but sometimes college is not right for everyone.');
  } else {
    alert('Please enter yes or no');
  };

};
collegeQuestion();


function jobQuestion() {

  var jobAnswer = prompt('Did I work at Din Tai Fung? yes or no?').toLowerCase();

  if(jobAnswer === 'y' || jobAnswer === 'yes') {
    alert('Yuuuuuuuup, I served for four plus years and ate over a thousand dumplings.');
    totalPoints++;
  } else if(jobAnswer === 'n' || jobAnswer === 'no') {
    alert('Noooooooope, I only worked there for the free dumplings.');
  } else {
    alert('Please enter yes or no');
  };

};
jobQuestion();


function corgiQuestion() {

  var corgiAnswer = prompt('Do I LOVE corgies? yes or no?)').toLowerCase();

  if(corgiAnswer === 'y' || corgiAnswer === 'yes') {
    alert('HELL YES I DO! THEY ARE LITTLE LOAFS OF JOY!');
    totalPoints++;
  } else if(corgiAnswer === 'n' || corgiAnswer === 'no') {
    alert('Do you even know me? Automatic GAME OVER...but i\'ll give you a free life.');
  } else {
    alert('Please enter yes or no');
  };

};
corgiQuestion();


function goalQuestion() {

  var sixTries = 6;

  for (var i = 0; i < 6; i++) {

    var goalAnswer = prompt('How many future goals do I have? I\'ll give you a hint, its either one, two, three, four, five or six. I\'ll give you six tries to guess. Guess counter: ' + sixTries);

    if(goalAnswer === 'six') {
      alert('Wow good guess!')
      totalPoints++;
      break;
    };

    switch(goalAnswer) {
    case 'zero':
      alert('Come on, I have little more ambitions than that!');
      sixTries--;
      break;
    case 'one':
      alert('More than that!');
      sixTries--;
      break;
    case 'two':
      alert('Keep going up!');
      sixTries--;
      break;
    case 'three':
      alert('Try multiplying by two!');
      sixTries--;
      break;
    case 'four':
      alert('Add two more goals!');
      sixTries--;
      break;
    case 'five':
      alert('Soooooo close!');
      sixTries--;
      break;
    default:
      alert('I did give you a hint its between one and six, right?');
      sixTries--;
    };

  };

};
goalQuestion();


function ageQuestion() {

  var fourTries = 4;

  var ageArray = ['21', '22', '23', '24', '25', '26', '27'];

  for (var i = 0; i < 4; i++) {

    var ageAnswer = prompt('How old am I? I will give you a hint. My age is between 21 and 27. I\'ll give you four tries. Tries Counter: ' + fourTries);

    if (ageAnswer === ageArray[5]) {
      alert('Wow, good guess!');
      totalPoints++;
      break;
    } else if (ageAnswer === ageArray[0] || ageAnswer === ageArray[1] || ageAnswer === ageArray[2] || ageAnswer === ageArray[3] || ageAnswer === ageArray[4]) {
      alert('Nope, too low. Try again');
      fourTries--;
    } else {
      alert('Nope, too high. Try again');
      fourTries--;
    };

  };

};
ageQuestion();


function animeQuestion() {
  
  var sixTries = 6;

  var favAnimeList = ['hunter x hunter', 'my hero academia', 'one piece'];

  var notTopThree = ['haikyu', 'demon slayer', 'sword art online'];

  for (var i = 0; i < 6; i++) {

    var favAnime = prompt ('What is one of Marchaels top three favorite animes? Here is the list: Hunter x Hunter, My Hero Academia, One Piece, Haikyu, Demon Slayer or Sword Art Online. I\'ll give you six tries this time. Tries Counter: ' + sixTries).toLowerCase();

    if (favAnime === favAnimeList[0] || favAnime === favAnimeList[1] || favAnime === favAnimeList[2]) {
      alert('Yup, ' + favAnime + ' is a dope anime!');
      totalPoints++;
      break;
    } else if (favAnime === notTopThree[0] || favAnime === notTopThree[1] || favAnime === notTopThree[2]) {
      alert('Nope, ' + favAnime + ' is not one of my favorites, but still a great anime.');
      sixTries--;
    } else {
      alert('I made it easy for you and gave you a list of animes to choose from.');
      sixTries--;
    };

  };

};
animeQuestion();
