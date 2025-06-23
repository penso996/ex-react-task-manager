export default function TaskRow({ task }) {

    // RENDER
    return (
        <tr>
            <td>{task.title}</td>
            <td>{task.status}</td>
            <td>{new Date(task.createdAt).toLocaleDateString("it-IT")}</td>
        </tr>
    )
}