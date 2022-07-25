import { useDispatch, useSelector } from "react-redux";

const StatusFilter = () => {

    const dispatch = useDispatch();

    const allTaskCount = useSelector(state => state.todo.todos)?.length;
    const pendingTaskCount = useSelector(state => state.todo.todos)?.filter(todo => todo?.['taskStatus'] === "active").length;
    const completedTaskCount = useSelector(state => state.todo.todos)?.filter(todo => todo?.['taskStatus'] === "completed").length;

    const statusFilter = useSelector(state => state.todo.statusFilter);

    const updateStatusFilter = (value) => {
        dispatch({
            type: "todo/updateStatusFilter",
            payload: value
        })
    }

    return (
        <div className="filters statusFilters">
            <h5>Filter by Status</h5>
            <ul>
                <li>
                    <button className={statusFilter === 'All' ? 'selected' : ''} onClick={() => updateStatusFilter("All")}>All ({allTaskCount})</button>
                </li>
                <li>
                    <button className={statusFilter === 'Active' ? 'selected' : ''} onClick={() => updateStatusFilter("Active")}>Active ({pendingTaskCount})</button>
                </li>
                <li>
                    <button className={statusFilter === 'Completed' ? 'selected' : ''} onClick={() => updateStatusFilter("Completed")}>Completed ({completedTaskCount})</button>
                </li>
            </ul>
        </div>
    )
}

export default StatusFilter;