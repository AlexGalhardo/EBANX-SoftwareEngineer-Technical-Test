import fs from 'fs'

const inMemoryJSONDatabase = JSON.parse(fs.readFileSync('inMemoryJSONDatabase', 'utf-8'))

export default inMemoryJSONDatabase