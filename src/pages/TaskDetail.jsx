// Import hooks from React
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

export default function TaskDetail() {

    const { id } = useParams();
    const navigate = useNavigate();
    const { tasks, removeTask } = useContext(GlobalContext);

    const task = tasks.find(task => task.id === parseInt(id));

    if (!task) {

        // RENDER
        return (
            <h1>404 TASK NOT FOUND</h1>
        )
    }

    const handleDelete = async () => {
        try {
            await removeTask(task.id);
            alert("Task Deleted");
            navigate("/");
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
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
                        <td><button onClick={handleDelete}>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}