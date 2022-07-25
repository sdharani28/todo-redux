import { useSelector } from "react-redux";

const TodoCount = () => {

    const pendingTaskCount = useSelector(state => state.todo.todos)?.filter(todo => todo?.['taskStatus'] === "active").length;

    return (
        <div className="todo-count"><h5>Remaining Todos</h5><strong>{pendingTaskCount}</strong> items left</div>
    )
}

export default TodoCount;