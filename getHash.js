const fs = require('fs')

const text = fs.readFileSync('hash.txt', 'utf8')
const hash = text.split(' | ')[2].replace(' -->', '').trim()

const timestamp = new Date().toLocaleString('en-US', {timeZone: 'America/New_York'})
const hashjs = `// Generated ${timestamp}
window.updateTimestamp = '${timestamp}'
window.nytBuildHash = '${hash}'
`
fs.writeFileSync('hash.js', hashjs)
