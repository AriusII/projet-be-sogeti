/**
 * Getting all the items of a todo list.
 * @param {int} groupId - The id of the todo list.
 * @returns 
 */
export async function p_Items_Of_Group(groupId) {
    try {
        const todoItems = await globalThis.prisma.todo_items.findMany({
            where: {
                group_id: parseInt(groupId)
            },
            orderBy: [
                {
                    status: "asc"
                }
            ],
            select: {
                id: true,
                group_id: true,
                item_name: true,
                status: true,
                todo_groups: {
                    select: {
                        todo_name: true,
                        todo_desc: true
                    }
                }
            }
        })
        return todoItems
    } catch (error) {
        return error
    }
}

/**
 * Getting a specific item from his id.
 * @param {int} itemId 
 * @returns 
 */
export async function p_Get_Item_From_ID(itemId) {
    try {
        const todoItems = await globalThis.prisma.todo_items.findMany({
            where: {
                id: parseInt(itemId)
            },
            select: {
                group_id: true,
                item_name: true,
                todo_groups: {
                    select: {
                        todo_name: true,
                        todo_desc: true,
                        todo_category: true
                    }
                }
            }
        })
        return todoItems
    } catch (error) {
        return error
    }
}

/**
 * Create a todo item on a todo list
 * @param {number} groupId - The id of the todo list
 * @param {string} itemName - The name of the todo item
 * @returns 
 */
export async function p_Create_Item(groupId, itemName) {
    try {
        const todoItem = await globalThis.prisma.$executeRawUnsafe`INSERT INTO todo_items (group_id, item_name) VALUES (${parseInt(groupId)}, ${itemName})`
        return todoItem
    } catch (error) {
        return error
    }
}

/**
 * Update the status of a todo item
 * @param {number} itemId - The id of the todo item
 * @param {number} status - The status of the todo item : 0 = not checked, 1 = checked
 * @returns 
 */
export async function p_Update_Item_status(item_id, item_status) {
    try {
        const todoItem = await globalThis.prisma.$executeRawUnsafe(`UPDATE todo_items SET status = ${item_status} WHERE id = ${item_id}`)
        return todoItem
    
    } catch (error) {
        return error
    }
}

/**
 * Delete a todo item.
 * @param {int} itemId - The id of the todo item.
 * @returns 
 */
export async function p_Delete_Item(itemId) {
    try {
        const todoItem = await globalThis.prisma.$executeRawUnsafe(`DELETE FROM todo_items WHERE id = ${itemId}`)
        return todoItem
    } catch (error) {
        return error
    }
}