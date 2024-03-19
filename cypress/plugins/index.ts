const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on: any, config: any) => {
  on('file:preprocessor', cucumber())
}