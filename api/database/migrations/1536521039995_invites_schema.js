'use strict'

const Schema = use('Schema')

class InvitesSchema extends Schema {
  up () {
    this.create('invites', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('email').notNullable().unique()
      table.integer('quantity').notNullable()
      table.integer('breakfast_id').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('invites')
  }
}

module.exports = InvitesSchema
