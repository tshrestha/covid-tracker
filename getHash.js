const fs = require('fs')

const text = fs.readFileSync('hash.txt', 'utf8')
const hash = text.split(' | ')[2].replace(' -->', '')

let hashjs = `// Generated ${new Date().toLocaleString()}\n`
hashjs += `const hash = '${hash}' // generated ${new Date().toLocaleString()}`
fs.writeFileSync('hash.js', hashjs)
