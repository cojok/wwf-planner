'use strict'

const Schema = use('Schema')

class BreakfastsSchema extends Schema {
  up () {
    this.create('breakfasts', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('breakfasts')
  }
}

module.exports = BreakfastsSchema
