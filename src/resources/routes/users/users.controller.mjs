import * as usersModel from './users.model.mjs'

/**
 * Get all users from the database
 * @param { import('express').Request } req
 * @param { import('express').Response } res
 */
export async function get_Users(req, res) {
    try {
        const users = await usersModel.p_Get_Users()
        res.json(users)
    } catch (error) {
        res.json(error)
    }
}

/**
 * Get a specific user from the database
 * @param {*} req 
 * @param {*} res 
 */
export async function get_User(req, res) {
    try {
        const user = await usersModel.p_Get_User(req.params.id)
        res.json(user)
    } catch (error) {
        res.json(error)
    }
}

/**
 * Create a new user in the database
 * @param {*} req 
 * @param {*} res 
 */
export async function create_User(req, res) {
    try {
        const user = await usersModel.p_Create_User(req.body.username, req.body.password)
        res.json(user)
    } catch (error) {
        res.json(error)
    }
}

/**
 * Update a user in the database
 * @param {*} req 
 * @param {*} res 
 */
export async function update_User(req, res) {
    try {
        const user = await usersModel.p_Update_User(req.params.id, req.body.name, req.body.password)
        res.json(user)
    } catch (error) {
        res.json(error)
    }
}

/**
 * Delete a user from the database
 * @param {*} req 
 * @param {*} res 
 */
export async function delete_User(req, res) {
    try {
        const user = await usersModel.p_Delete_User(req.params.id)
        res.json(user)
    } catch (error) {
        res.json(error)
    }
}

/**
 * Login a user
 * @param {*} req 
 * @param {*} res 
 */
export async function login_User(req, res) {
    try {
        const user = await usersModel.p_Login_User(req.body.username, req.body.password)
        res.json(user)
    } catch (error) {
        res.json(error)
    }
}