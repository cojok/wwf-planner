'use strict'
const Registration = use('App/Models/Registration')
class RegistrationController {
  /**
   * register for breakfast
   */
  async save ({ request, response }) {
    const registrationData = request.all()
    const registration = new Registration()

    registration.fill(registrationData)
    await registration.save()

    return response.json({
      ststus: 'success',
      body: registration,
      message: 'Registred to breakfast'
    })
  }
}

module.exports = RegistrationController
