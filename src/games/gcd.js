const getRandomNumber = () => Math.floor(Math.random() * 100) + 1

const findGCD = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const game = {
  gameDescription: 'Find the greatest common divisor of given numbers.',
  generateRound: () => {
    const num1 = getRandomNumber()
    const num2 = getRandomNumber()
    const question = `${num1} ${num2}`
    const correctAnswer = String(findGCD(num1, num2))
    return { question, correctAnswer }
  },
}

export default game
