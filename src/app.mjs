// import the express module and the cors
import express from 'express'
import cors from 'cors'

// we import prismaClient, and we store prismaClient in a Global variable project
import { PrismaClient } from '@prisma/client'
globalThis.prisma = new PrismaClient()

// create a new express application instance
const app = express()

// use CORS to allow cross-origin requests
app.use(cors({
        origin: "*",
        optionsSuccessStatus: 200
    })
)

// define app json
app.use(express.json({ limit: '25mb' }))

// define urlencoded size
app.use(express.urlencoded({ limit: '50mb', extended: true }))

// we import our routes
import rUsers from './resources/routes/users/users.router.mjs'
import rTodoList from './resources/routes/todoList/todoList.router.mjs'
import rTodoItem from './resources/routes/todoItems/todoItem.router.mjs'

// then we use our routes
app.use('/api/users', rUsers)
app.use('/api/todo/list', rTodoList)
app.use('/api/todo/item', rTodoItem)

// start the Express server
app.listen(3000, () => {
    console.log('Server started on port 3000')
})