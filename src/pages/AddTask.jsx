// Import hooks from React
import { useRef, useState } from "react"


export default function AddTask() {

    const [taskTitle, setTaskTitle] = useState("");
    const descriptionRef = useRef();
    const statusRef = useRef();

    // RENDER
    return (
        <>
            <h1>ADD TASK</h1>

            <form>
                {/* task name */}
                <label>
                    Task Name:
                    <input
                        type="text"
                        value={taskTitle}
                        onChange={e => setTaskTitle(e.target.value)}
                    />
                </label>
                {/* task description */}
                <label>
                    Task Description:
                    <textarea
                        ref={descriptionRef}
                    />
                </label>
                {/* task status */}
                <label>
                    Task Status:
                    <select ref={statusRef}
                        defaultValue={"To do"}>
                        {["To do", "Doing", "Done"].map((value, index) => (
                            <option key={index} value={value}>{value}</option>
                        ))}
                    </select>
                </label>
            </form>
        </>
    )
}