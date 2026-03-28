
install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-
	
lint:
	npx eslint

lintfix:
	npx eslint . --fix --config .eslintrc.json