import readlineSync from 'readline-sync';

const getRandomNumber = (min = 1, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const askNameAndGreet = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const evenGame = {
  gameDescription: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateRound: () => {
    const number = getRandomNumber();
    const question = String(number);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    return { question, correctAnswer };
  }
};

export const calcGame = {
  gameDescription: 'What is the result of the expression?',
  generateRound: () => {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const question = `${num1} ${operator} ${num2}`;
    let result;

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
    }

    const correctAnswer = String(result);
    return { question, correctAnswer };
  }
};

const findGCD = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

export const gcdGame = {
  gameDescription: 'Find the greatest common divisor of given numbers.',
  generateRound: () => {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const question = `${num1} ${num2}`;
    const correctAnswer = String(findGCD(num1, num2));

    return { question, correctAnswer };
  }
};

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

export const progressionGame = {
  gameDescription: 'What number is missing in the progression?',
  generateRound: () => {
    const start = getRandomNumber(1, 50);
    const step = getRandomNumber(1, 10);
    const length = getRandomNumber(5, 10); 

    const progression = generateProgression(start, step, length);

    const hiddenIndex = getRandomNumber(0, length - 1);
    const correctAnswer = String(progression[hiddenIndex]);

    const questionParts = progression.map((num, index) =>
      index === hiddenIndex ? '..' : String(num)
    );
    const question = questionParts.join(' ');

    return { question, correctAnswer };
  }
};