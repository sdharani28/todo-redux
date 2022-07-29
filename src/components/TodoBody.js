import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TodoInput from "./core/TodoInput";
import TodoList from "./core/TodoList";
import Filter from "./filters";
import { fetchTodos } from "../redux/reducers/actions";

function TodoBody() {

    const dispatch = useDispatch();

    useEffect(() => { 
        dispatch(fetchTodos());
     }, [dispatch]);

    return (
        <div>
            <div className='todo-body' >
                <div className='container' >
                    <h2 className='todo-title' >Todos</h2>
                    <div className='todo-app-wrapper' >
                        <div className='todo-app'>
                            <TodoInput />
                            <TodoList />
                        </div>
                        <div className='todo-filter-wrapper'>
                            <Filter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoBody;
