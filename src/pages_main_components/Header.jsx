// Import hooks from React
import { NavLink } from "react-router-dom";

export default function Header() {

    // RENDER
    return (
        <header>
            <nav>
                {/* task list*/}
                <NavLink
                    to="/" end
                    style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" })}
                >TASK LIST</NavLink>

                {/* add task */}
                <NavLink
                    to="/add-task"
                    style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" })}
                >ADD TASK</NavLink>
            </nav>
        </header >
    )
}