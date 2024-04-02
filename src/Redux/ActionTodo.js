export function addTasks(task) {
    return {
        type: "ADD_TASK",
        payload: task
    }
}

export function deleteTask(id) {
    return {
        type: "DELETE_TASK",
        payload:id
    }
}
export function editTasks(data) {
    return {
        type: 'EDIT_TASK',
        payload : data
    }
}