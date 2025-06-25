// Import hooks from React
import { memo } from "react";


export const TaskRow = memo(({ task }) => {

    // RENDER
    return (
        <tr>
            <td>{task.title}</td>
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