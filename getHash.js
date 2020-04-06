const fs = require('fs')

const text = fs.readFileSync('hash.txt', 'utf8')
const hash = text.split(' | ')[2].replace(' -->', '').trim()

const timestamp = new Date().toLocaleString()
const hashjs = `// Generated ${timestamp}
window.updateTimestamp = '${timestamp}'
window.nytBuildHash = '${hash}'
`
fs.writeFileSync('hash.js', hashjs)
