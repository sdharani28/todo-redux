import { useDispatch } from "react-redux";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const deleteTask = () => {
        dispatch({
            type: "todo/deleteTask",
            payload: todo?.['id']
        })
    }

    const updateStatus = (e) => {
        dispatch({
            type: "todo/updateStatus",
            payload: {
                id: todo?.['id'],
                taskStatus: e.target.checked ? 'completed' : 'active'
            }
        })
    }

    const updateColor = (e) => {
        dispatch({
            type: "todo/updateColor",
            payload: {
                id: todo?.['id'],
                color: e.target.value
            }
        })
    }

    return (<li>
        <div className="view">
            <div className="segment label">
                <input className="toggle" type="checkbox" checked={todo?.['taskStatus'] === 'completed'} onChange={updateStatus} />
                <div className="todo-text">
                    {todo?.['taskName']}
                </div>
            </div>
            <div className="segment buttons">
                <select className="colorPicker" value={todo?.['color']} onChange={updateColor} >
                    <option value=""></option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="orange">Orange</option>
                    <option value="purple">Purple</option>
                    <option value="red">Red</option>
                </select>
                <button className="destroy" onClick={() => deleteTask()} >
                    Delete
                </button>
            </div>
        </div>
    </li>)
}

export default TodoItem