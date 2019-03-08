const fs = require('fs')
const yaml = require('js-yaml')

const parse = (path) => yaml.safeLoad(fs.readFileSync(path, 'utf8'))
const format = (path, data) => fs.writeFileSync(path, yaml.safeDump(data))

module.exports = { parse, format }
