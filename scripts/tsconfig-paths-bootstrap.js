/* global require */
const { readFileSync } = require('fs')
const tsConfigPaths = require('tsconfig-paths')

const baseUrl = '.'
const tsConfig = JSON.parse(readFileSync('tsconfig.json').toString())

const cleanup = tsConfigPaths.register({
  baseUrl,
  paths: tsConfig.compilerOptions.paths
})

cleanup()
