import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {

    const todos = useSelector(state => state.todo.todos);
    const statusFilter = useSelector(state => state.todo.statusFilter);
    const colorFilter = useSelector(state => state.todo.colorFilter);

    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        if (statusFilter === "All") {
            setFilteredTodos(todos);
        }
        else if (statusFilter === "Active") {
            setFilteredTodos(todos?.filter(todo => todo?.['taskStatus'] === 'active'));
        }
        else if (statusFilter === "Completed") {
            setFilteredTodos(todos?.filter(todo => todo?.['taskStatus'] === 'completed'));
        }
        else {
            setFilteredTodos(todos);
        }
        setFilteredTodos(prevValue => prevValue?.filter(todo => colorFilter.includes(todo?.['color'])));
    }, [todos, statusFilter, colorFilter]);


    return (<>
        {
            filteredTodos?.length ? (<ul className="todo-list">
                {
                    filteredTodos?.map((todo, index) => <TodoItem key={todo.id} todo={todo} />)
                }
            </ul>) : (<div className="empty-message">Add your first todo</div>)
        }
    </>)
}

export default TodoList;