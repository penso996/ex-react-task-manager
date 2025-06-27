//  Import hooks from React
import { useState, useEffect } from "react";


export default function useTasks() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/tasks`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(error => console.error(error));
    }, []);

    // add task
    const addTask = async newTask => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask)
        });
        const { success, message, task } = await response.json();

        if (!success) throw new Error(message);

        setTasks(prev => [...prev, task])
    }

    // remove task
    const removeTask = async taskId => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks/${taskId}`, {
            method: "DELETE"
        });
        const { success, message } = await response.json();

        if (!success) throw new Error(message);

        setTasks(prev => prev.filter(task => task.id !== taskId))
    }

    // update task
    const updateTask = async updatedTask => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks/${updatedTask.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedTask)
        });
        const { success, message, task } = await response.json();

        if (!success) throw new Error(message);

        setTasks(prev => prev.map(oldTask => oldTask.id === task.id ? task : oldTask))
    }

    // return
    return { tasks, addTask, removeTask, updateTask }

}