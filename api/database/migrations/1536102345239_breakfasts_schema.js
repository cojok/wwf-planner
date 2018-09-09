'use strict'

const Schema = use('Schema')

class BreakfastsSchema extends Schema {
  up () {
    this.create('breakfasts', (table) => {
      table.increments()
      table.date('date').notNullable()
      table.date('time').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('breakfasts')
  }
}

module.exports = BreakfastsSchema
