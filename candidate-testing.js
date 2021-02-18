const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = 'Who was the first woman in space? ';
let correctAnswer = 'Sally Ride';
let candidateAnswer = '';
let questions = ["Who was the first American woman in space? ", "True or false: 5000 meters == 5 kilometers? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', '3'];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question('Please enter your name: ');

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (i = 0; i < questions.length; i++) {
  candidateAnswers.push(input.question(questions[i]));
 
}

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
let totalGrade = 0;
let questNum = 0
for (i = 0; i < questions.length; i++) {
  if (candidateAnswers[i] === correctAnswers[i]) {
    totalGrade++;
  console.log(`Question ${++questNum}: Correct!`);
  } else if (candidateAnswers[i] === 'sally ride') {
    totalGrade++;
  console.log(`Question ${++questNum}: Correct!`);
  } else if (candidateAnswers[i] === 'True') {
    totalGrade++;
  console.log(`Question ${++questNum}: Correct!`);
  } else if (candidateAnswers[i] === 'trajectory') {
    totalGrade++;
  console.log(`Question ${++questNum}: Correct!`);
  } else {
    console.log(`Question ${++questNum}: Incorrect! Correct Answer: ${correctAnswers[i]}`);
  }
}

  let grade = (totalGrade) / (questions.length) * 100;
  let status = '';
  if (grade < 80) {
    status = 'FAILED';
  } else {
    status = 'PASSED! HOORAY!';
  } 
console.log(`\nCandidate Name: ${candidateName}\n${questions[0]}\nYour Answer: ${candidateAnswers[0]}\nCorrect Answer: ${correctAnswers[0]}\n`);
console.log(`\n${questions[1]}\nYour Answer: ${candidateAnswers[1]}\nCorrect Answer: ${correctAnswers[1]}\n`);
console.log(`\n${questions[2]}\nYour Answer: ${candidateAnswers[2]}\nCorrect Answer: ${correctAnswers[2]}\n`);
console.log(`\n${questions[3]}\nYour Answer: ${candidateAnswers[3]}\nCorrect Answer: ${correctAnswers[3]}\n`);
console.log(`\n${questions[4]}\nYour Answer: ${candidateAnswers[4]}\nCorrect Answer: ${correctAnswers[4]}\n`);
console.log(`>>> Overall Grade: ${grade}% (${totalGrade} of ${questions.length} responses correct) <<<\n>>> Status: ${status} <<<`);
  return grade;

}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Greetings ${candidateName}, Please answer the following questions to the best of your ability. `);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};