// import the express router
import express from 'express'
const rTodoItem = express.Router()

// import the controller
import * as todoItemCtrl from './todoItem.controller.mjs'

// import the middlewares
import { badRoutesRequestHandler } from '../../middlewares/badRoutesRequest.hander.mjs'
import { unknownRoutesHandler } from '../../middlewares/unknownRoutes.hander.mjs'

// define item routes
rTodoItem.get('/:groupId', todoItemCtrl.get_Items_Of_Group)
//rTodoItem.get('/from/:itemId', todoItemCtrl.get_Item_From_Id)
rTodoItem.post('/create', todoItemCtrl.create_Item)
rTodoItem.put('/update', todoItemCtrl.update_Item)
rTodoItem.put('/update/status', todoItemCtrl.update_Item_status)
rTodoItem.delete('/delete/:id', todoItemCtrl.delete_Item)


// define the bad routes
rTodoItem.all('/', badRoutesRequestHandler)

// define the unknown routes
rTodoItem.all('*', unknownRoutesHandler)

// export the router
export default rTodoItem