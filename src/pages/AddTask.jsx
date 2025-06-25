// Import hooks from React
import { useMemo, useRef, useState, useContext } from "react";

// Import context
import { GlobalContext } from "../context/GlobalContext";


export default function AddTask() {
    const { addTask } = useContext(GlobalContext);

    const symbols = "!@#$%^&*()-_=+[]£{}|;:'\",.<>?/`~";

    const [taskTitle, setTaskTitle] = useState("");
    const descriptionRef = useRef();
    const statusRef = useRef();

    const taskTitleError = useMemo(() => {
        if (!taskTitle.trim())
            return "Can't be empty"
        if ([...taskTitle].some(char => symbols.includes(char)))
            return "No special characters"
        return "";
    }, [taskTitle])

    const handleSubmit = async e => {
        e.preventDefault();
        if (taskTitleError)
            return;
        const newTask = {
            title: taskTitle.trim(),
            description: descriptionRef.current.value,
            status: statusRef.current.value
        }

        try {
            await addTask(newTask);
            alert("Task added");
            setTaskTitle("");
            descriptionRef.current.value = "";
            statusRef.current.value = "";
        } catch (error) {
            alert(error.message);
        }
    }

    // RENDER
    return (
        <>
            <h1>ADD TASK</h1>

            <form onSubmit={handleSubmit}>
                {/* task title */}
                <label>
                    Task title:
                    <input
                        type="text"
                        value={taskTitle}
                        onChange={e => setTaskTitle(e.target.value)}
                    />
                    {taskTitleError && (
                        <p style={{ color: 'red' }}>{taskTitleError}</p>
                    )}
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
                {/* submit button */}
                <button
                    type="submit"
                    disabled={taskTitleError}
                >
                    Add Task
                </button>
            </form>
        </>
    )
}