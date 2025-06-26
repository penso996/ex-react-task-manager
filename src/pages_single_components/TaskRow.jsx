// Import hooks from React
import { memo } from "react";
import { Link } from "react-router-dom";


export const TaskRow = memo(({ task }) => {

    // RENDER
    return (
        <tr>
            <td><Link to={`/task/${task.id}`}>{task.title}</Link></td>
            <td
                style={{
                    color:
                        task.status === "To do"
                            ? "red"
                            : task.status === "Doing"
                                ? "orange"
                                : task.status === "Done"
                                    ? "green"
                                    : "black"
                }}
            >
                {task.status}
            </td>
            <td>{new Date(task.createdAt).toLocaleDateString("it-IT")}</td>
        </tr>
    )
})

export default TaskRow;