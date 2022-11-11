// import the express router
import express from 'express'
const rTodoList = express.Router()

// import the controller
import * as todoListCtrl from './todoList.controller.mjs'

// import the middlewares
import { badRoutesRequestHandler } from '../../middlewares/badRoutesRequest.hander.mjs'
import { unknownRoutesHandler } from '../../middlewares/unknownRoutes.hander.mjs'

// define list routes
rTodoList.get('/:userId', todoListCtrl.get_User_TodoListings)
rTodoList.get('/:userId/:groupId', todoListCtrl.get_User_Specific_TodoListing)
rTodoList.post('/create', todoListCtrl.create_User_TodoListing)
rTodoList.delete('/delete/:id', todoListCtrl.delete_User_TodoListing)


// define the bad routes
rTodoList.all('/', badRoutesRequestHandler)

// define the unknown routes
rTodoList.all('*', unknownRoutesHandler)

// export the router
export default rTodoList