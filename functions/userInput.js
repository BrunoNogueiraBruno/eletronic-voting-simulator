// source: https://stackoverflow.com/questions/61394928/get-user-input-through-node-js-console - Josh

const readline = require('readline')

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve))

module.exports = { prompt, rl }
