'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

/**
 * Breakfast routes
 */
Route.get('breakfasts', 'BreakfastController.index')
Route.get('breakfast/:id', 'BreakfastController.getBreakfast')
Route.post('breakfast', 'BreakfastController.save')
Route.post('breakfast/:id', 'BreakfastController.update')

/**
 * Products routes
 */
 Route.get('products', 'ProductController.index')
 Route.post('products', 'ProductController.save')