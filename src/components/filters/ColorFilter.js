import { useDispatch, useSelector } from "react-redux";

const ColorFilter = () => {

    const dispatch = useDispatch();

    const greenTaskCount = useSelector(state => state.todo.todos)?.filter(todo => todo?.['color'] === "green").length;
    const blueTaskCount = useSelector(state => state.todo.todos)?.filter(todo => todo?.['color'] === "blue").length;
    const orangeTaskCount = useSelector(state => state.todo.todos)?.filter(todo => todo?.['color'] === "orange").length;
    const purpleTaskCount = useSelector(state => state.todo.todos)?.filter(todo => todo?.['color'] === "purple").length;
    const redTaskCount = useSelector(state => state.todo.todos)?.filter(todo => todo?.['color'] === "red").length;

    const colorFilter = useSelector(state => state.todo.colorFilter);

    const updateColorFilter = (color, changeType) => {
        dispatch({
            type: "todo/updateColorFilter",
            payload: {
                color: color,
                changeType: changeType
            }
        })
    }

    return (
        <div className="filters colorFilters">
            <h5>Filter by Color</h5>
            <form className="colorSelection">
                <label>
                    <input type="checkbox" name="green" checked={colorFilter.includes('green')} onChange={e => updateColorFilter("green", e.target.checked ? 'added' : 'removed' )} />
                    <span className="color-block" style={{ backgroundColor: "green" }}></span>Green ({greenTaskCount})
                </label>
                <label>
                    <input type="checkbox" name="blue" checked={colorFilter.includes('blue')} onChange={e => updateColorFilter("blue", e.target.checked ? 'added' : 'removed' )} />
                    <span className="color-block" style={{ backgroundColor: "blue" }}></span>Blue ({blueTaskCount})
                </label>
                <label>
                    <input type="checkbox" name="orange" checked={colorFilter.includes('orange')} onChange={e => updateColorFilter("orange", e.target.checked ? 'added' : 'removed' )} />
                    <span className="color-block" style={{ backgroundColor: "orange" }}>
                    </span>Orange ({orangeTaskCount})
                </label><label><input type="checkbox" name="purple" checked={colorFilter.includes('purple')} onChange={e => updateColorFilter("purple", e.target.checked ? 'added' : 'removed' )} />
                    <span className="color-block" style={{ backgroundColor: "purple" }}>
                    </span>Purple ({purpleTaskCount})
                </label>
                <label>
                    <input type="checkbox" name="red" checked={colorFilter.includes('red')} onChange={e => updateColorFilter("red", e.target.checked ? 'added' : 'removed' )} />
                    <span className="color-block" style={{ backgroundColor: "red" }}>
                    </span>Red ({redTaskCount})
                </label>
            </form>
        </div>
    )
}

export default ColorFilter;