module.exports = {
  extends: [
    "tslint:recommended",
    "tslint-sonarts",
    "tslint-clean-code",
    "tslint-config-prettier"
  ],
  rules: {
    "cognitive-complexity": [true, 5],
    "mccabe-complexity": [true, 5],
    "no-all-duplicated-branches": true,
    "no-big-function": [true, 16],
    "no-commented-code": true,
    "no-dead-store": true,
    "no-duplicate-in-composite": true,
    "no-duplicate-string": true,
    "no-duplicated-branches": true,
    "no-identical-conditions": true,
    "no-identical-expressions": true,
    "no-identical-functions": true,
    "no-magic-numbers": true,
    "no-unused-variable": [
      true,
      {
        "check-parameters": true
      }
    ],
    "object-literal-sort-keys": false,
    "parameters-max-number": [true, 4],
    "variable-name": [true, "ban-keywords", "check-format"]
  }
};
