'use strict'

const Invite = use ('App/Models/Invite')
const Breakfast = use ('App/Models/Breakfast')

class InviteController {

  /**
   * Get an invite 
   */

   async ({ request, params, response }) {
      try {
        
        const id = params.id
        const invite = await Invite.findOrFail(id)

        return response.json({
          status: 'success',
          body: invite,
          message: 'Invite retireved!'
        })

      } catch (error) {
        return response.status(400).json({
          status: 'error',
          body: error,
          message: 'No invite found'
        })
      }
   }

   /**
    * Save invite
    */
   async ({ request, response }) {
     try {
       const inviteData = request.all()
       const invite = new Invite()

       invite.fill(inviteData)
       await invite.save()

       return response.json({
         status: 'success',
         body: 'invite',
         message: 'Invite completed successfully!'
       })
     } catch (error) {
      return response.status(500).json({
        status: 'error',
        body: error,
        message: 'Server issues. Try again later'
      })
     }
   }
}

module.exports = InviteController
