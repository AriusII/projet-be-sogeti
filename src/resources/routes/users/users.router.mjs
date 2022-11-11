// import the express router
import express from 'express'
const rUsers = express.Router()

// import the controller
import { get_Users, get_User, create_User, update_User, delete_User, login_User } from './users.controller.mjs'

// import the middlewares
import { badRoutesRequestHandler } from '../../middlewares/badRoutesRequest.hander.mjs'
import { unknownRoutesHandler } from '../../middlewares/unknownRoutes.hander.mjs'

// define user routes
rUsers.get('/', get_Users)
rUsers.get('/:id', get_User)
rUsers.post('/login', login_User)
rUsers.post('/register', create_User)
rUsers.put('/update/:id', update_User)
rUsers.delete('/delete/:id', delete_User)

// define the bad routes
rUsers.all('/', badRoutesRequestHandler)
rUsers.all('/:id', badRoutesRequestHandler)

// define the unknown routes
rUsers.all('*', unknownRoutesHandler)

// export the router
export default rUsers