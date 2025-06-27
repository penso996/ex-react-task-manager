// Import hooks from React
import { useState, useRef } from "react";

// Import modal
import Modal from "./Modal";

export default function EditTaskModal(show, onClose, task, onSave) {

    const [editedTask, setEditedTask] = useState(task);
    const changeEditedTask = (key, event) => {
        setEditedTask(prev => ({ ...prev, [key]: event.target.value }));
    }

    return (
        < Modal
            title="Modify Task"
            content={
                <form>
                    {/* task title */}
                    <label>
                        Task Title:
                        <input
                            type="text"
                            value={editedTask.title}
                            onChange={e => changeEditedTask("title", e)}
                        />
                    </label>
                    {/* task description */}
                    <label>
                        Task Description:
                        <textarea
                            value={editedTask.description}
                            onChange={e => changeEditedTask("description", e)}
                        />
                    </label>
                    {/* task status */}
                    <label>
                        Task Status:
                        <select
                            value={editedTask.status}
                            onChange={e => changeEditedTask("status", e)}
                        />
                        {["To Do", "Doing", "Done"].map((value, index) => (
                            <option
                                key={index}
                                value={value}>
                                {value}
                            </option>
                        ))}
                    </label>
                </form >

            }
            confirmText="Save"
        />
    )
}