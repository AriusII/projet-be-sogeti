import * as todoModel from './todoList.model.mjs'

/**
 * Get all todo lists from the database
 * @param { import('express').Request } req
 * @param { import('express').Response } res
 */
export async function get_User_TodoListings(req, res) {
    try {
        const user = await todoModel.p_User_Listings(req.params.userId)
        res.json(user)
    } catch (error) {
        res.json(error)
    }
}

/**
 * Get a specific todo list from the database
 * @param {*} req 
 * @param {*} res 
 */
export async function get_User_Specific_TodoListing(req, res) {
    try {
        const user = await todoModel.p_Specific_Listing(req.params.userId, req.params.groupId)
        res.json(user)
    } catch (error) {
        res.json(error)
    }
}

/**
 * Create a new todo list in the database
 * @param {*} req 
 * @param {*} res 
 */
export async function create_User_TodoListing(req, res) {
    try {
        const user = await todoModel.p_Create_Listing(req.body.user_id, req.body.name, req.body.desc, req.body.item)
        res.json(user)
    } catch (error) {
        res.json(error)
    }
}

/**
 * Delete a todo list in the database
 * @param {*} req 
 * @param {*} res 
 */
export async function delete_User_TodoListing(req, res) {
    try {
        const user = await todoModel.p_Delete_Listing(req.params.id)
        res.json(user)
    } catch (error) {
        res.json(error)
    }
}