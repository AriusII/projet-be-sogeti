/**
 * Getting all the user todo lists.
 * @param {int} userId 
 * @returns 
 */
export async function p_User_Listings(userId) {
    try {
        const usersLists = await globalThis.prisma.todo_groups.findMany({
            where: {
                user_id: parseInt(userId)
            },
            orderBy: [
                {
                    id: "desc"
                },
                {
                    is_finish: "asc"
                }
            ],
            select: {
                id: true,
                todo_name: true,
                todo_desc: true,
            }
        })
        return usersLists
    } catch (error) {
        return error
    }
}

/**
 * Getting a specific user todo list.
 * @param {int} userId 
 * @returns 
 */
export async function p_Specific_Listing(userId, groupId) {
    try {
        const todoList = await globalThis.prisma.todo_groups.findFirst({
            where: {
                user_id: parseInt(userId),
                id: parseInt(groupId)
            },
            select: {
                id: true,
                todo_name: true,
                todo_desc: true,
                todo_category: true,
                users: {
                    select: {
                        username: true
                    }
                }
            }
        })
        return todoList
    } catch (error) {
        return error
    }
}

/**
 * Creating a new todo list with the usage of a stored procedure.
 * @param {int} userId - The user id.
 * @param {string} todo_groups - The todo list name.
 * @param {string} todo_desc - The todo list description.
 * @param {string} item_name - The todo item name.
 * @returns
 */
export async function p_Create_Listing(userid, name, desc, item) {
    try {
        await globalThis.prisma.$executeRaw`CALL newList(${userid}, ${name}, ${desc}, ${item})`
        return "Todo List Created"
    } catch (error) {
        return error
    }
}

/**
 * Deleting a todo list with the usage of a stored procedure.
 * @param {int} id 
 * @returns
 */
export async function p_Delete_Listing(id) {
    try {
        const todoList = await globalThis.prisma.$executeRaw`CALL delete_todo_group(${parseInt(id)})`
        return todoList
    } catch (error) {
        return error
    }
}
