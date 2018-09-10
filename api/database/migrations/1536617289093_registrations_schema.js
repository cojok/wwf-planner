'use strict'

const Schema = use('Schema')

class RegistrationsSchema extends Schema {
  up () {
    this.create('registrations', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.integer('quantity').notNullable()
      table.integer('breakfast_id').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('registrations')
  }
}

module.exports = RegistrationsSchema
