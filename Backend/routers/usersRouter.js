import express from 'express'
import * as controller from '../controllers/usersController.js'
import auth from '../middlewares/auth.js'
import 'express-async-errors'
// import * as validations from '../lib/userValidation.js'

import validateInputs from '../middlewares/validate.js'
import { registerValidationUser, loginValidation } from '../lib/userRules.js'


//  Initialitation of un object of the class "Router", management the routes in express
const router = express.Router()

router.get('/', controller.getAllUsers)
router.get('/userbyemail/:email', auth, controller.getUserByEmail)
router.get('/user', auth, controller.getUser)
router.patch('/user', controller.patchUser)
router.post('/register', validateInputs(registerValidationUser), controller.createUser)
router.post('/login', validateInputs(loginValidation), controller.login)
router.get('/loggedIn', auth, controller.isLoggedIn)
// router.post('/logout', auth, controller.logout)
router.post('/logout', controller.logout)
// router.get('/usersongslike/:email', controller.getUserSongsLike)

export default router