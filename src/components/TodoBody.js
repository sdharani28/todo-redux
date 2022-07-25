import TodoInput from "./core/TodoInput";
import TodoList from "./core/TodoList";
import Filter from "./filters";

function TodoBody() {
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
