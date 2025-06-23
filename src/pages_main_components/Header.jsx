// Import hooks from React
import { NavLink } from "react-router-dom";

export default function Header() {

    // RENDER
    return (
        <header>
            <nav>
                <NavLink to="/">Task List</NavLink>
                <NavLink to="/add-task">Add Task</NavLink>
            </nav>
        </header>
    )
}