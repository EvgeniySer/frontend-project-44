const getRandomNumber = (min = 1, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const isPrime = (num) => {
  if (num <= 1) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  const sqrt = Math.sqrt(num)
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) return false
  }
  return true
}

const game = {
  gameDescription: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateRound: () => {
    const number = getRandomNumber(1, 100)
    const question = String(number)
    const correctAnswer = isPrime(number) ? 'yes' : 'no'
    return { question, correctAnswer }
  },
}

export default game
