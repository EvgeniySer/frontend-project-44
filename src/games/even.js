const getRandomNumber = () => Math.floor(Math.random() * 100) + 1

const game = {
  gameDescription: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateRound: () => {
    const number = getRandomNumber()
    const question = String(number)
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no'
    return { question, correctAnswer }
  },
}

export default game
