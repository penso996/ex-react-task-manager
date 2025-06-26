// Import hooks from React
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

export default function TaskDetail() {

    const { id } = useParams();
    const { tasks } = useContext(GlobalContext);

    const task = tasks.find(task => task.id === parseInt(id));

    if (!task) {

        // RENDER
        return (
            <h1>404 TASK NOT FOUND</h1>
        )
    }

    // RENDER
    return (
        <>
            <h1>TASK DETAIL</h1>

            <table>
                {/* table head */}
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Creation</th>
                    </tr>
                </thead>
                {/* table body */}
                <tbody>
                    <tr>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
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
                </tbody>
            </table>
        </>
    )
}