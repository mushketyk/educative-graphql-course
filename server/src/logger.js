
const pino = require('pino')
const logger = pino({
  prettyPrint: {
    colorize: true,
    translateTime: 'SYS:standard',
    ignore: 'hostname,pid',
  }
})

module.exports = logger