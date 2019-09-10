module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "2018"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "semi": ["error", "never"],
    "quotes": ["error", "single"],
    "no-trailing-spaces": "error",
    "eol-last": ["error", "always"],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "@typescript-eslint/no-explicit-any": "off",
  },
  overrides: [
    {
      files: [ "*.js" ],
      rules: {
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ]
}