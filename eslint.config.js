import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      // 1. Убираем лишние точки с запятой
      '@stylistic/semi': ['error', 'never'],

      // 2. Перенос строки в конце файла
      '@stylistic/eol-last': ['error', 'always'],

      // 3. Отступы — 2 пробела (без outerIIFE)
      '@stylistic/indent': ['error', 2, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        FunctionDeclaration: { body: 1, parameters: 1 },
        FunctionExpression: { body: 1, parameters: 1 },
      }],

      // 4. Trailing commas в объектах и массивах
      '@stylistic/comma-dangle': ['error', 'always-multiline'],

      // Дополнительные полезные правила для чистоты кода
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/space-infix-ops': ['error', { int32Hint: false }],
    },
  },
]
