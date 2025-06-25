// Import hooks from React
import { useContext } from "react";

// Import context
import { GlobalContext } from "../context/GlobalContext";

// Import page_single_component
import TaskRow from "../pages_single_components/TaskRow";


export default function TaskList() {

    const { tasks } = useContext(GlobalContext);

    // RENDER
    return (
        <>
            <h1>TASK LIST</h1>

            <table>
                {/* table head */}
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Stato</th>
                        <th>Data di Creazione</th>
                    </tr>
                </thead>

                {/* table body */}
                <tbody>
                    {tasks.map(task => (
                        <TaskRow key={task.id} task={task} />
                    ))}
                </tbody>
            </table>
        </>
    )
}