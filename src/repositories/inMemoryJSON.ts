import fs from 'fs-extra'

const inMemoryJSONDatabase = JSON.parse(fs.readFileSync('./inMemoryJSON.json', 'utf-8'))

export default inMemoryJSONDatabase