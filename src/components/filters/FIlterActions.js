import { useDispatch } from "react-redux";

const FilterActions = () => {

    const dispatch = useDispatch();

    const markAllCompleted = (e) => {
        dispatch({
            type: "todo/markAllCompleted",
        })
    }

    const cleareTodos = (e) => {
        dispatch({
            type: "todo/clearCompleteTodos",
        })
    }

    return (
        <div className="actions">
            <h5>Actions</h5>
            <button className="button" onClick={markAllCompleted} >Mark All Completed</button>
            <button className="button" onClick={cleareTodos} >Clear Completed</button>
        </div>
    )
}

export default FilterActions;