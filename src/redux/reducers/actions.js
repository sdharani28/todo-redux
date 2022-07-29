const fetchTodos = () => async dispatch => {
    try {
        const response = await (await fetch('/fakeApi/todos')).json();
        dispatch({ type: 'todo/fetchTodos', payload: response?.['todos'] ?? [] })
    } catch (error) {
        console.error(`Error occured in fetchTodos action :: ${error}`);
    }
}

const addTodo = (taskName) => async dispatch => {
    try {
        const request = {
            todo: {
                taskName
            }
        }
        const response = await (await fetch('/fakeApi/todos', { method: 'POST', body: JSON.stringify(request) })).json()
        dispatch({ type: 'todo/addTask', payload: response?.['todo'] })
    } catch (error) {
        console.error(`Error occured in addTodo action :: ${error}`);
    }
}

export { fetchTodos, addTodo };