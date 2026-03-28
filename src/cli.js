import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

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