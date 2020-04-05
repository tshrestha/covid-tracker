const fs = require('fs')

const text = fs.readFileSync('hash.txt', 'utf8')
const hash = text.split(' | ')[2].replace(' -->', '')
const hashjs = `const hash = '${hash}' // generated ${new Date().toLocaleString()}`
fs.writeFileSync('hash.js', hashjs)
