'use strict'

const Model = use('Model')

class Breakfast extends Model {

  /**
   * Breakfast belongs to many registrations
   */
  breakfastRegistration () {
    return this.hasMany('App/Models/BreakfastRegistration')
  }

  registration () {
    return this.hasMany('App/Models/Registration')
  }

  employee() {
    return this.hasMany('App/Models/Employee')
  }
}

module.exports = Breakfast
