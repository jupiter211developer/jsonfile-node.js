const jsonfile = require('jsonfile')
const file = './2.json'

obj = jsonfile.readFileSync(file)

// jsonfile.writeFileSync('./1_.json', obj, { spaces: 2 })
jsonfile.writeFileSync('./2_.json', obj)
console.log('success')
