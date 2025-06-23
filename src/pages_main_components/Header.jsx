// Import hooks from React
import { NavLink } from "react-router-dom";

function Header() {

    // RENDER
    return (
        <header>
            <nav>
                <NavLink to="/" end>Task List</NavLink>
                <NavLink to="/add-task">Add Task</NavLink>
            </nav>
        </header>
    )
}

export default Header