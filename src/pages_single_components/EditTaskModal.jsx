// Import hooks from React
import { useState, useRef } from "react";

// Import page_single_components
import Modal from "./Modal";

export default function EditTaskModal({ show, onClose, task, onSave }) {

    const [editedTask, setEditedTask] = useState(task);
    const editFormRef = useRef();

    const changeEditedTask = (key, event) => {
        setEditedTask(prev => ({ ...prev, [key]: event.target.value }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        onSave(editedTask);
    }

    return (
        < Modal
            title="Modify Task"
            content={
                <form ref={editFormRef} onSubmit={handleSubmit}>
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
                        >
                            {["To do", "Doing", "Done"].map((value, index) => (
                                <option key={index} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </label>

                </form >

            }
            confirmText="Save"
            show={show}
            onClose={onClose}
            onConfirm={() => editFormRef.current.requestSubmit()}
        />
    )
}