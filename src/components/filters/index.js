import FilterActions from "./FIlterActions";
import TodoCount from "./TodoCount";
import StatusFilter from "./StatusFilter";
import ColorFilter from "./ColorFilter";

const Filter = () => {

    return (
        <div className="footer" >
            <FilterActions />
            <TodoCount />
            <StatusFilter />
            <ColorFilter />
        </div>
    )
}

export default Filter;