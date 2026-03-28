const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const game = {
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

export default game;
