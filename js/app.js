'use strict';

var userAns1, userAns2, userAns3, userAns4, userAns5, userAns6, userAns7, broken, correct, incorrect;

broken = ('Its a yes or no question. Type y or n. You could even type yes or no. Just not what you did.');
correct = 0;
incorrect = 0;
console.log('Correct and incorrect will track the number of answers and their values. They should both start at 0');
console.log('correct: ' + correct);
console.log('incorrect: ' + incorrect);

alert('Hey I am holding you against your will until you finish this about me minigame');

function q1() {
  userAns1 = prompt('Am I an artistic person?').toLowerCase(); // ask the question through a prompt, and change their answer to lower case so I can compare to the correct answer without worrying about the casing
  console.log('User answer for question 1 is: ' + userAns1); // created a console log to see the users answer for this question

  if(userAns1 === 'y' || userAns1 === 'yes') // If they answer with 'y' OR 'yes'
  {
    alert('I\'ll give you half points for that, I am really creative and inspired but I have not developed anything into any artistic talent yet!'); // this alert message will appear
    correct+= 0.5; // the *score* for the correct count will increase by 0.5
  }
  else if(userAns1 === 'n' || userAns1 === 'no')
  {
    alert('I\'ll give you half points for that, I am really creative and inspired but I have not developed anything into any artistic talent yet!');
    correct+= 0.5;
  }
  else // if the user's answer is anything else other than y/n or yes/no
  {
    alert(broken); // show the broken message in an alert box
    q1(); // ask the question again
  }
}
q1();

function q2() {
  userAns2 = prompt('Do you think that I have prior experiance to coding other than at the Code Fellows school?').toLowerCase();
  console.log('User answer for question 2 is: ' + userAns2);

  if(userAns2 === 'y'|| userAns2 === 'yes')
  {
    alert('You are correct! I have some experience in Java that I picked up with Arizona State University in their Principles of Programming and Data Structures courses.');
    correct++;
  }
  else if(userAns2 === 'n' || userAns2 === 'no')
  {
    alert('Unfortunately you guessed incorrectly. I have some experience in Java that I picked up with Arizona State University in their Principles of Programming and Data Structures courses.');
    incorrect++;
  }
  else
  {
    alert(broken);
    q2();
  }
}
q2();

function q3() {
  userAns3 = prompt('Do you think I have any tattoos?').toLowerCase();
  console.log('User answer for question 3 is: ' + userAns3);
  if(userAns3 === 'y'|| userAns3 === 'yes')
  {
    alert('That is correct! I currently have one tattoo that is a quote from the closing lines of the poem Invictus. It was written by William Ernest Henley in 1875 and the closing lines are: \n"I am the master of my fate\n I am the captain of my soul."');
    correct++;
  }
  else if(userAns3 === 'n' || userAns3 === 'no')
  {
    alert('You guessed wrong :( \nI currently have one tattoo that is a quote from the closing lines of the poem Invictus. It was written by William Ernest Henley in 1875 and the closing lines are: \n"I am the master of my fate\n I am the captain of my soul."');
    incorrect++;
  }
  else
  {
    alert(broken);
    q3();
  }
}
q3();

function q4() {
  userAns4 = prompt('Can I make authentic Mexican food?').toLowerCase();
  console.log(userAns4);

  if(userAns4 === 'y'|| userAns4 === 'yes')
  {
    alert('Correct! This is something that I actually enjoy to do regularly. I will usually cook with my family and we normally make traditional Mexican recipes.');
    correct++;
  }
  else if(userAns4 === 'n' || userAns4 === 'no')
  {
    alert('Ouch, that is incorrect... I will usually cook with my family and we normally make traditional Mexican recipes.');
    incorrect++;
  }
  else
  {
    alert(broken);
    q4();
  }
}
q4();

function q5() {
  userAns5 = prompt('Am I from kentucky?').toLowerCase();
  console.log(userAns5);

  if(userAns5 === 'y'|| userAns5 === 'yes')
  {
    alert('I love every form of art!');
    correct++;
  }
  else if(userAns5 === 'n' || userAns5 === 'no')
  {
    alert('Wat. Why? How could anyone not... Um, I gottat go.');
    incorrect++;
  }
  else
  {
    alert(broken);
    q5();
  }
}
q5();

/******************************************************************************************************/

function q6() {
  var totAttempts = 4;
  var rightAns = 60;
  userAns6 = prompt('What is my favorite number? I\'ll give you a hint its from 1 to 100!');
  while(totAttempts > 1){
    if(parseInt(userAns6) === rightAns)
    {
      alert('Dammmmmmmmn, how\'d you know?! You must be a cousin!');
      correct++;
      totAttempts = 0;
      break;
    }
    else if(userAns6 > rightAns)
    {
      userAns6 = prompt('You are aiming too high');
      totAttempts--;
    }
    else if(userAns6 < rightAns)
    {
      userAns6 = prompt('You are going too low!');
      totAttempts--;
    }
    else{ userAns6 = prompt('You have to enter a number between 1 - 100!');}
  }
}

q6();



function q7() {

  var arrayOfHobbies = ['music','games','excercise', 'nature', 'food', 'cooking', 'exploring', 'culture', 'philosiphy', 'coffee', 'fashion', 'business'];
  var trysLeft = 6;
  var correctness = false;


  while (trysLeft > 0 && correctness === false)
  {

    userAns7 = prompt('What are some things that I like to do?').toUpperCase();

    if (arrayOfHobbies.includes(userAns7))
    {
      correctness = true;
      alert('You are right!');
      alert('Here are all of the states I\'ve lived in!\n ' + arrayOfHobbies.join(','));
      break;
    }
    else
    {
      trysLeft--;
      alert('Wrong! Try again, ' + trysLeft + ' trys left');
    }

  }

  if (trysLeft === 0)
  {
    alert('You ran out of attempts!');
    alert('Here is all of the things that I have interests in!\n ' + arrayOfHobbies.join(','));
  }

}

q7();

console.log('correct: ' + correct);
console.log('incorrect: ' + incorrect);