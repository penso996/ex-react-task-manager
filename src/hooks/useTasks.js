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

    const removeTask = () => {

    }

    const updateTask = () => {

    }

    return { tasks, addTask, removeTask, updateTask }

}