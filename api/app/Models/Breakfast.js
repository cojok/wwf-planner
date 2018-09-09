'use strict'

const Model = use('Model')

class Breakfast extends Model {

  /**
   * Breakfast belongs to many invites
   */
  invites() {
    return this.hasMany('App/Models/Invite')
  }
}

module.exports = Breakfast
