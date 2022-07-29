const initialState = {
    todos: [
        
    ],

    statusFilter: "All",
    colorFilter: ["green",
        "blue",
        "orange",
        "purple",
        "red",]
};

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case "todo/fetchTodos": {
            return { ...state, todos: action.payload };
        }
        case "todo/addTodo": {
            const tempTodos = [...state.todos];
            tempTodos.push(action.payload);
            return { ...state, todos: tempTodos };
        }
        case "todo/addTask": {
            const tempTodos = [...state.todos];
            tempTodos.push(action.payload);
            return { ...state, todos: tempTodos };
        }
        case "todo/deleteTask": {
            const tempTodos = [...state.todos].filter(todo => todo.id !== action?.payload);
            return { ...state, todos: tempTodos };
        }
        case "todo/updateStatus": {
            let tempTodos = [...state.todos];
            tempTodos.find(todo => todo['id'] === action.payload.id)['taskStatus'] = action.payload.taskStatus
            return { ...state, todos: tempTodos };
        }
        case "todo/updateColor": {
            let tempTodos = [...state.todos];
            tempTodos.find(todo => todo['id'] === action.payload.id)['color'] = action.payload.color
            return { ...state, todos: tempTodos };
        }
        case "todo/markAllCompleted": {
            const tempTodos = [...state.todos].map(todo => ({ ...todo, taskStatus: "completed" }));
            return { ...state, todos: tempTodos };
        }
        case "todo/clearCompleteTodos": {
            const tempTodos = [...state.todos].filter(todo => todo.taskStatus === "active");
            return { ...state, todos: tempTodos };
        }
        case "todo/updateStatusFilter": {
            return { ...state, statusFilter: action.payload };
        }
        case "todo/updateColorFilter": {
            const {color, changeType} = action.payload;
            let tempColorFilter = [...state.colorFilter];
            if(changeType === 'removed'){
                tempColorFilter = [...state.colorFilter].filter(tempColor => tempColor !== color);
            }
            else if(changeType === 'added'){
                tempColorFilter.push(color);
            }
            return { ...state, colorFilter: tempColorFilter };
        }
        default:
            return state;
    }
}

export default todoReducer;

