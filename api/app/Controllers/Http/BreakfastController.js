'use strict'

const Breakfast = use('App/Models/Breakfast')
const Invite = use('App/Models/Invite')

class BreakfastController {

  /**
   * Get all the breakfasts
   */

   async index ({ request, response }) {
     try {

      const breakfasts = await Breakfast.all()

      return response.json({
        status: 'success',
        body: breakfasts,
        message: 'All breakfasts retrieve'

      })
       
     } catch (error) {
       return response.status(400).json({
         status: 'error',
         body: error,
         message: 'No breakfasts found!'
       })
     }
   }

   /**
   * Get breakfast
   */

  async getBReakfast ({ request, params, response }) {
    try {
     
     const id = params.id 
     const breakfast = await Breakfast.findOrFail(id)

     return response.json({
       status: 'success',
       body: breakfast,
       message: 'Breakfast retrieve'

     })
      
    } catch (error) {
      return response.status(400).json({
        status: 'error',
        body: error,
        message: 'No breakfast found!'
      })
    }
  }

   /**
    * Add breakfast
    */

    async save ({ request, response }) {

      try {

        const breakfastData = request.all()
        const breakfast = new Breakfast()

        breakfast.fill(breakfastData)
        
        await breakfast.save()

        return response.json({
          status: 'success',
          body: breakfast,
          message: 'Breakfast saved successfully!'
        })
        
      } catch (error) {
        return response.status(500).json({
          status: 'error',
          body: error,
          message: 'Something went wrong. Please try again later!'
        })
      }

    }
}

module.exports = BreakfastController
