'use strict'

const Model = use('Model')

class Registration extends Model {
  breakfast() {
     return this.belongsTo('App/Models/Breakfast')
  }
}

module.exports = Registration
