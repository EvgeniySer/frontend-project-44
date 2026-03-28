import readlineSync from 'readline-sync'

const ROUNDS_TO_WIN = 3

const runGame = (gameDescription, generateRound) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(gameDescription)

  for (let i = 0; i < ROUNDS_TO_WIN; i += 1) {
    const { question, correctAnswer } = generateRound()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ').trim()

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

export default runGame
