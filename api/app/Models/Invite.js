'use strict'

const Model = use('Model')

class Invite extends Model {

  /**
   * An invite belongs to one breakfast
   */
  breakfast() {
     return this.belongsTo('App/Models/Breakfast')
  }
}

module.exports = Invite
