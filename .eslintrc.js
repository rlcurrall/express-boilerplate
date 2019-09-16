module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "html"],
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  settings: {
    "html/html-extensions": [".html", ".njk"]
  },
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
    "@typescript-eslint/interface-name-prefix": "off",
  },
  overrides: [
    {
      files: [ "*.js", "delv" ],
      rules: {
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ]
}