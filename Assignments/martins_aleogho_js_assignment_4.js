'use strict';

/*
Question 1

Write a function that prints an array (passed as an argument) using the forEach() method.
Write a second function that sorts an array of numbers (parameter 1) based on a value 
(a string, parameter 2) that will define the order of the sorting process - 'ascending' (1, 2, 3)
 or 'descending' (3, 2, 1). After sort the array, this function will call the previous function 
 to print it.
Requirement: validate the array (data type and minimum length) before sorting it.
*/

const array_1 = [3, 2, 5, 6, 9, 4, 3, 7]; 
function printArray(argument) {
    if(Array.isArray(argument) && argument.length != 0) {
        argument.forEach((element) => console.log(element)) ;

    } else{
        console.log(`Not a valid array`);
    }
} 
 function sortArray(array, order) {
    if(!Array.isArray(array) || array.length === 0) {
        console.log(`Not a valid array`);
    }
    if (order !== 'accending' && order !== 'decending') {
        console.log('Invalid Order, Order can either be accending or decending');
    }
    if (order === 'accending'){
        array.sort((a, b) => a - b);
    } else if (order === 'decending') {
        array.sort((a, b) => b - a);
    }
    printArray(array)
 }
sortArray(array_1, 'accending');
console.log();

/*
Question 2

Write a set of functions to generate a random password. The password (a string) is composed of 4 random 
lowercase letters (a-z), 1 special character ('-', '_', '.', or '@'), and 4 random numbers (0-9).
Requirement: use at least three functions to build the password. Each function will return a part of it. 
Examples: lsjo_4674, fnqi.5366, crjx@0471, yepf.2825
*/


function generateRandomLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  }
  
  function generateRandomCharacters() {
    const specialChars = ['-', '_', '!', '.', '@', ',', '%', '$'];
    const randomIndex = Math.floor(Math.random() * specialChars.length);
    return specialChars[randomIndex];
  }
  
  function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
  
  function generateRandomPassword() {
    let password = '';

    for (let i = 0; i < 4; i++) {
      password += generateRandomLetter();
    }
    
    password += generateRandomCharacters();

    for (let i = 0; i < 4; i++) {
      password += generateRandomNumber();
    }
  
    return password;
  }
  
  console.log(generateRandomPassword());
  console.log();

/*
Question 3
  Write a program that extracts unique values from a 2D array, adds them to a new (empty) array, 
  and prints the result. Use the following 2D array as it is, and do not use Set() to get unique numbers.
    11 17 12 13 
    14 15 16 15 
    18 10 12 11 
    17 14 19 10
*/

const array_2D = [
    [11, 17, 12, 13],
    [14, 15, 16, 15],
    [18, 10, 12, 11],
    [17, 14, 19, 10]
  ];
  
  let uniqueValues = new Array();
  
  for (let i = 0; i < array_2D.length; i++) {
    for (let j = 0; j < array_2D[i].length; j++) {
      let index = array_2D[i][j];
      if (!uniqueValues.includes(index)) {
        uniqueValues.push(index);
      }
    }
  }
  
  console.log(uniqueValues);
  console.log();

  /*
  Question 4
    Write a program that lists all anagrams found in an array of strings. 
    Do not show the string you used as a search word. Use the words below.
    'earth', 'hater', 'heart', 'herat', 'land', 'part', 'prat', 'pearl', 'power', 
    'rapt', 'raptor', 'rathe', 'tarp', 'tradition', 'trap', 'tramp', 'tour'
*/

const words = ['earth', 'hater', 'heart', 'herat', 'land', 'part', 'prat', 
                'pearl', 'power', 'rapt', 'raptor', 'rathe', 'tarp', 'tradition', 
                        'trap', 'tramp', 'tour'];

function findAnagrams(word, wordList) {
  const anagrams = new Array();

  for (let i = 0; i < wordList.length; i++) {
    if (word === wordList[i]) {
      continue;
    }
    if (isAnagram(word, wordList[i])) {
      anagrams.push(wordList[i]);
    }
  }
  return anagrams;
}

function isAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  const sortedWord1 = word1.split('').sort().join('');
  const sortedWord2 = word2.split('').sort().join('');
  return sortedWord1 === sortedWord2;
}

for (let i = 0; i < words.length; i++) {
  const anagrams = findAnagrams(words[i], words);
  console.log(`Anagrams of ${words[i]}: ${anagrams.join(', ')}`);
}