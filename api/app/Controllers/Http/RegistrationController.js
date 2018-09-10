'use strict'
const Registration = use('App/Models/Registration')
class RegistrationController {
  /**
   * register for breakfast
   */
  async save ({ request, response }) {
    try {
      const registrationData = request.all()
      const registration = new Registration()

      registration.fill(registrationData)
      await registration.save()

      return response.json({
        ststus: 'success',
        body: registration,
        message: 'Registred to breakfast'
      })
    } catch (error) {
      return response.status(500).json({
        status: 'error',
        body: error,
        message: 'Something went wrong. Please try again later.'
      })
    }
  }
}

module.exports = RegistrationController
