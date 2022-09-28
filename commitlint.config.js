module.exports = {
  extends: [
    "@commitlint/config-conventional"
  ],
  rules: {
    "type-enum": [2, "always", ["Feature", "Fix", "Refactor", "Delete", "Docs", "Hotfix", "Build", "ci", "Chore"]],
    "type-case": [2, "always", ["start-case"]],
    "subject-case": [2, "always", ["sentence-case"]]
  }
}
