module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es2021": true,
        "mocha": true
    },
    "extends": [
        "eslint:recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "no-async-promise-executor": ["off"],
        "no-prototype-builtins": ["off"],
        // "mocha/no-exclusive-tests": "error",
        // "mocha/no-top-level-hooks": "off"
        // 'quotes': ['error', 'single'],
        // 'semi': ['error', 'always'],
        // 'indent': ['error', 2],
        // 'no-multi-spaces': ['error'],
        // 'eol-last': ['error', 'always']
    }
}
