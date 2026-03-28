const getRandomNumber = (min = 1, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const game = {
  gameDescription: 'What number is missing in the progression?',
  generateRound: () => {
    const start = getRandomNumber(1, 50)
    const step = getRandomNumber(1, 10)
    const length = getRandomNumber(5, 10)

    const progression = generateProgression(start, step, length)
    const hiddenIndex = getRandomNumber(0, length - 1)
    const correctAnswer = String(progression[hiddenIndex])

    const questionParts = progression.map((num, index) =>
      index === hiddenIndex ? '..' : String(num),
    )
    const question = questionParts.join(' ')

    return { question, correctAnswer }
  },
}

export default game
