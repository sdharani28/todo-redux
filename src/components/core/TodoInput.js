import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../../redux/reducers/actions";

const TodoInput = () => {

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch({
        //     type: "todo/addTask",
        //     payload: {
        //         id: Math.floor(1000 + Math.random() * 9000),
        //         taskName: inputValue,
        //         color: "blue",
        //         taskStatus: "active"
        //     }
        // });
        dispatch(addTodo(inputValue));
        setInputValue("");
    }

    return <header className="todo-input-header">
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    className="todo-input"
                    placeholder="What needs to be done?"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    maxLength={50}
                    required
                    autoFocus />
                <button className="add" type="submit" >
                    ADD
                </button>
            </div>
        </form>
    </header>
}

export default TodoInput;