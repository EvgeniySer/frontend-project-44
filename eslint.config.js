export default [
    {
      files: ['**/*.js'],
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      rules: {
        'no-console': 'warn',
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        // Добавьте другие правила по необходимости
      }
    }
  ];
  