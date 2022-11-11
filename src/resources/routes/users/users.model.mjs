/**
 * Getting all users from the database
 * @returns {Object} - Returns an object with the user's data
 */
export async function p_Get_Users() {
    try {
        const users = await globalThis.prisma.users.findMany()
        return users
    } catch (error) {
        return error
    }
}

/**
 * Getting a specific user from the database
 * @param {Number} id - The user's id
 * @returns {Object} - Returns an object with the user's data
 */
export async function p_Get_User(id) {
    try {
        const user = await globalThis.prisma.users.findUnique({
            where: {
                id: parseInt(id)
            }
        })
        return user
    } catch (error) {
        return error
    }
}

/**
 * Create a new user in the database
 * @param { String } username - The user's username
 * @param { String } password - The user's password
 * @return
 */
export async function p_Create_User(username, password) {
    try {
        await globalThis.prisma.users.create({
            data: {
                username: username,
                password: password
            }
        })
        return "User created"
    } catch (error) {
        return error
    }
}

/**
 * Update a user in the database
 * @param { Number } id - The user's id
 * @param { String } username - The user's username
 * @param { String } password - The user's password
 * @returns 
 */
export async function p_Update_User(id, username, password) {
    try {
        const user = await globalThis.prisma.users.update({
            where: {
                id: parseInt(id)
            },
            data: {
                username: username,
                password: password
            }
        })
        return user
    } catch (error) {
        return error
    }
}

/**
 * Delete a user in the database
 * @param { Number } id - The user's id
 * @returns 
 */
export async function p_Delete_User(id) {
    try {
        const user = await globalThis.prisma.users.delete({
            where: {
                id: parseInt(id)
            }
        })
        return user
    } catch (error) {
        return error
    }
}

/**
 * We retrieve the user's data from the database to permit the login.
 * @param { String } username - The user's username
 * @param { String } password - The user's password
 * @returns 
 */
export async function p_Login_User(username, password) {
    try {
        const user = await globalThis.prisma.users.findMany({
            where: {
                username: username,
                password: password
            }
        })
        return user
    } catch (error) {
        return error
    }
}