import * as todoItemModel from './todoItem.model.mjs'

/**
 * Getting all the todo_item from a specific todo_list
 * @param { import('express').Request } req
 * @param { import('express').Response } res
 */
export async function get_Items_Of_Group(req, res) {
    try {
        const todoItems = await todoItemModel.p_Items_Of_Group(req.params.groupId)
        res.json(todoItems)
    } catch (error) {
        res.json(error)
    }
}

/* export async function get_Item_From_Id(req, res) {
    try {
        const todoItems = await todoItemModel.p_Get_Item_From_ID(req.params.itemId)
        res.json(todoItems)
    } catch (error) {
        res.json(error)
    }
} */

/**
 * Create a new todo_item in the database
 * @param {*} req 
 * @param {*} res 
 */
export async function create_Item(req, res) {
    try {
        const todoItem = await todoItemModel.p_Create_Item(req.body.group_id, req.body.item_name)
        res.json(todoItem)
    } catch (error) {
        res.json(error)
    }
}

/**
 * Update a todo_item in the database
 * @param {*} req 
 * @param {*} res 
 */
export async function update_Item(req, res) {
    try {
        const todoItem = await todoItemModel.p_Update_Item(req.params.itemId, req.body.group_id, req.body.item_name, req.body.status)
        res.json(todoItem)
    } catch (error) {
        res.json(error)
    }
}

/**
 * Update the status of a todo_item in the database
 * @param {*} req 
 * @param {*} res 
 */
export async function update_Item_status(req, res) {
    try {
        const updateItem = await todoItemModel.p_Update_Item_status(req.body.id, req.body.status)
        res.json(updateItem)
    } catch (error) {
        res.json(error)
    }
}

/**
 * Delete a todo_item from the database
 * @param {*} req 
 * @param {*} res 
 */
export async function delete_Item(req, res) {
    try {
        const todoItem = await todoItemModel.p_Delete_Item(req.params.id)
        res.json(todoItem)
    } catch (error) {
        res.json(error)
    }
}